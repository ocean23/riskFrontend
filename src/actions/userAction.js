import 'whatwg-fetch';
import { LOGIN_SAGAS, LOGIN_OTP_SAGAS, AFTER_LOGIN, AFTER_LOGIN_OTP } from '../constants/UserConstants';
import { doPost, doGet } from './asyncAction';
import { browserHistory } from 'react-router';

export function login(user) {
	return new Promise(function(resolve, reject) {
		const url = 'http://igateway.wolaidai.com:8888/sso/login';
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}).then(function(req) {
			console.log('------------');
			console.log(req.json);
			console.log('---------');
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

export function loadPermissions() {
	const url = 'http://igateway.wolaidai.com:8888/iam/my/role/buttons';
	const responsePromise = doGet(url);
	responsePromise.then(
		resObj => loadPermissionsHandler(resObj), resStr => {console.log('internal error=' + resStr);}
		);
}

function loadPermissionsHandler(resObj) {
	console.log('######');
	console.log(resObj);
	console.log(resObj.status);
	console.log('#######');
	if (resObj.status === 401) {
		browserHistory.push('login');
	}
}
