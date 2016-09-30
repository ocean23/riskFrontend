import 'whatwg-fetch';

export function doPost(data) {
	return new Promise(function(resolve, reject) {
		const url = 'http://igateway.wolaidai.com:8888/sso/login';
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(function(req) {
			console.log('------------');
			console.log(req.json);
			console.log('---------');
			resolve(req);
		}).catch(function(err) {
			reject(err.message);
		});
	});
}

export function doGet(url) {
	const xUserToken = localStorage.getItem('xUserToken');
	console.log('@@@@@@@@@@');
	console.log(xUserToken);
	console.log('@@@@@@@@@@');
	return new Promise(function(resolve, reject) {
		fetch(url, {
			method: 'GET',
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
