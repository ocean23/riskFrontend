import 'whatwg-fetch';
import { FETCH_USER_DETAIL_SAGAS, UPDATE_USER_DETAIL, ACTIVE_LOCATION_SAGAS, RECEIVE_PRIZE_SAGAS, UPDATE_USER_PRIZE, UPDATE_VISITED_LOCATION } from '../constants/HuntingConstants';

export function fetchUserDetail(code) {
  return new Promise(function(resolve, reject) {
  	const url = '/hunting/oauth/54f1b82a58f24d7d16c18888/' + code + '.json';
    fetch(G.serverHost + url, {
      method: 'POST',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
      }
    }).then(function(req) {
      resolve(req.json());
    }).catch(function(err) {
      reject(err.message);
    });
  });
}

export function activeLocation(intermedia) {
  return new Promise(function(resolve, reject) {
  	const url = '/hunting/active/' + intermedia.location + '/' + intermedia.openid + '.json';
    fetch(G.serverHost + url, {
      method: 'PUT',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
      }
    }).then(function(req) {
      resolve(req.json());
    }).catch(function(err) {
      reject(err.message);
    });
  });
}

export function receivePrize(openid) {
  return new Promise(function(resolve, reject) {
  	const url = '/hunting/receive/' + openid + '.json';
    fetch(G.serverHost + url, {
      method: 'PUT',
      headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
      }
    }).then(function(req) {
      resolve(req.json());
    }).catch(function(err) {
      reject(err.message);
    });
  });
}

export function activeLocationSagas(intermedia) {
	return { type: ACTIVE_LOCATION_SAGAS, intermedia };
}

export function fetchUserDetailSagas(intermedia) {
  return { type: FETCH_USER_DETAIL_SAGAS, intermedia };
}

export function updateUserDetail(intermedia) {
  return { type: UPDATE_USER_DETAIL, intermedia };
}

export function receiveUserPrizeSagas(intermedia) {
	return { type: RECEIVE_PRIZE_SAGAS, intermedia };
}

export function updateUserPrize() {
	return { type: UPDATE_USER_PRIZE };
}

export function updateVisitedLocation(intermedia) {
	return { type: UPDATE_VISITED_LOCATION, intermedia };
}
