import 'whatwg-fetch';
import { browserHistory } from 'react-router';

export function doPost(url, data) {
	const userSessionStr = sessionStorage.getItem('userSession');
	if (userSessionStr === null || userSessionStr === undefined) {
		browserHistory.push('login');
		return false;
	}
	const userSession = JSON.parse(userSessionStr);
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-User-Token': userSession.xUserToken
			},
			body: JSON.stringify(data)
		}).then(function(response) {
			return response.json();
		}).then(function(json) {
			resolve(json);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

export function doGet(url) {
	const userSessionStr = sessionStorage.getItem('userSession');
	if (userSessionStr === null || userSessionStr === undefined) {
		browserHistory.push('login');
		return false;
	}
	const userSession = JSON.parse(userSessionStr);
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'X-User-Token': userSession.xUserToken
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
