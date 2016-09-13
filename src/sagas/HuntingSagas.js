import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { FETCH_USER_DETAIL_SAGAS, ACTIVE_LOCATION_SAGAS, RECEIVE_PRIZE_SAGAS } from '../constants/HuntingConstants';
import { fetchUserDetail, activeLocation, updateUserDetail, receivePrize, updateUserPrize, updateVisitedLocation } from '../actions/huntingAction';

export function* fetchUserDetailSagas(getState) {
	try {
		const chartsData = yield call(fetchUserDetail, getState.intermedia);
		if (chartsData.code === 0) {
			yield put(updateUserDetail(chartsData.data));
		} else {
			console.log('error: code=' + chartsData.code);
		}
	} catch (errMsg) {
		console.log('submit form error:' + errMsg);
	}
}

export function* activeLocationSagas(getState) {
	try {
		const chartsData = yield call(activeLocation, getState.intermedia);
		if (chartsData.code === 0) {
			console.log('active success');
			yield put(updateVisitedLocation(chartsData.data));
		} else {
			console.log('error: code=' + chartsData.code);
		}
	} catch (errMsg) {
		console.log('active error:' + errMsg);
	}
}

export function* receivePrizeSagas(getState) {
	try {
		console.log('%%%%%%%%%%');
		console.log(getState);
		console.log('%%%%%%%%%%%');
		const chartsData = yield call(receivePrize, getState.intermedia);
		if (chartsData.code === 0) {
			yield put(updateUserPrize());
		} else {
			console.log('error: code=' + chartsData.code);
		}
	} catch (errMsg) {
		console.log('submit form error:' + errMsg);
	}
}

export default function* root() {
  yield [
      takeEvery(FETCH_USER_DETAIL_SAGAS, fetchUserDetailSagas),
      takeEvery(ACTIVE_LOCATION_SAGAS, activeLocationSagas),
      takeEvery(RECEIVE_PRIZE_SAGAS, receivePrizeSagas)
  ];
}
