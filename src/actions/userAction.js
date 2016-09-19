import 'whatwg-fetch';
import { LOGIN_SAGAS, LOGIN_OTP_SAGAS, AFTER_LOGIN, AFTER_LOGIN_OTP } from '../constants/UserConstants';

export function login(user) {
  return new Promise(function(resolve, reject) {
  	const url = 'http://igateway.wolaidai.com:8888/sso/login';
  	console.log('beginnnnnnnnn');
  	console.log(user);
  	console.log(url);
  	console.log('beginnnnnnnnn');
    fetch(url, {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
      },
			body: JSON.stringify(user)
    }).then(function(req) {
      resolve(req.json());
    }).catch(function(err) {
      reject(err.message);
    });
  });
}

export function loginOtp(userOtp) {
  return new Promise(function(resolve, reject) {
  	const url = 'http://igateway.wolaidai.com:8888/sso/second_factor';
    fetch(url, {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
      },
			body: JSON.stringify(userOtp)
    }).then(function(req) {
      resolve(req);
    }).catch(function(err) {
      reject(err.message);
    });
  });
}

