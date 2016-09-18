import 'whatwg-fetch';
import { LOGIN_SAGAS, LOGIN_OTP_SAGAS, AFTER_LOGIN, AFTER_LOGIN_OTP, CHANGE_PAGE } from '../constants/UserConstants';
import {
    LOCATION_CHANGE
} from 'react-router-redux';

export function login(intermedia) {
  return new Promise(function(resolve, reject) {
  	const url = 'http://igateway.wolaidai.com:8888/sso/login';
  	console.log('beginnnnnnnnn');
  	console.log(intermedia);
  	console.log(url);
  	console.log('beginnnnnnnnn');
    fetch(url, {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
      },
			body: JSON.stringify(intermedia)
    }).then(function(req) {
    	console.log('11111111');
    	console.log(req);
    	console.log('111111111');
      resolve(req.json());
    }).catch(function(err) {
    	console.log('22222');
    	console.log(err);
    	console.log('22222');
      reject(err.message);
    });
  });
}

export function loginOtp(intermedia) {
  return new Promise(function(resolve, reject) {
  	const url = 'http://igateway.wolaidai.com:8888/sso/second_factor';
  	console.log('beginnnnnnnnn');
  	console.log(intermedia);
  	console.log(url);
  	console.log('beginnnnnnnnn');
    fetch(url, {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
      },
			body: JSON.stringify(intermedia)
    }).then(function(req) {
    	console.log('11111111');
    	console.log(req);
    	console.log('111111111');
      resolve(req.json());
    }).catch(function(err) {
    	console.log('22222');
    	console.log(err);
    	console.log('22222');
      reject(err.message);
    });
  });
}

export function loginSagas(intermedia) {
	return { type: LOGIN_SAGAS, intermedia };
}

export function afterLogin(intermedia) {
	return { type: AFTER_LOGIN, intermedia };
}

export function loginOtpSagas(intermedia) {
	return { type: LOGIN_OTP_SAGAS, intermedia };
}

export function afterLoginOtp(intermedia) {
	return { type: AFTER_LOGIN_OTP, intermedia };
}

export function changePage(intermedia) {
	return { type: LOCATION_CHANGE, intermedia };
}
