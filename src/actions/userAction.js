import 'whatwg-fetch';
import { SUCCESS_LOGIN, PERMISSIONS, INIT_PERMISSIONS, LOGIN_SAGAS, LOGIN_OTP_SAGAS, AFTER_LOGIN, AFTER_LOGIN_OTP } from '../constants/UserConstants';
import { doPost, doGet } from './asyncAction';
import { browserHistory } from 'react-router';

export function login(user) {
	return new Promise(function(resolve, reject) {
		const url = 'http://192.168.130.11:6699/sso/login';
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			resolve(json);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

export function logout() {
	const xUserToken = sessionStorage.getItem('xUserToken');
	return new Promise(function(resolve, reject) {
		const url = 'http://192.168.130.11:6699/sso/logout';
		fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-User-Token': xUserToken
			}
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			resolve(json);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

export function loadPermissions(xUserToken) {
	return new Promise(function(resolve, reject) {
		const url = 'http://192.168.130.11:6699/iam/my/role/buttons';
		fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-User-Token': xUserToken
			}
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			resolve(json);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

export function loginOtp(userOtp) {
	return new Promise(function(resolve, reject) {
		const url = 'http://192.168.130.11:6699/sso/second_factor';
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userOtp)
		}).then(function(response) {
			resolve(response);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

