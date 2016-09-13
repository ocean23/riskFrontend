import 'whatwg-fetch';
import { SUBMIT_FORM_DATA, UPDATE_ALREADY_SUBMIT } from '../constants/AppConstants';

// 规定: 假如是async call的方法前面要加上async
// 假如不是redux aciton的方法后面要加上Normal
export function asyncSubmitForm(intermedia) {
  return new Promise(function(resolve, reject) {
  	console.log('######');
  	console.log(intermedia);
  	console.log('######');
    fetch(G.serverHost + '/rent/leaguer.json', {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
      },
      body: JSON.stringify(intermedia)
    }).then(function(req) {
      resolve(req.json());
    }).catch(function(err) {
      reject(err.message);
    });
  });
}

export function sagasSubmitForm(intermedia) {
	console.log('@@@@@@');
	console.log(intermedia);
	console.log('@@@@@@@@');
  return { type: SUBMIT_FORM_DATA, intermedia };
}

export function updateAlreadySubmit() {
  return { type: UPDATE_ALREADY_SUBMIT };
}
