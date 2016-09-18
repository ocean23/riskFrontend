import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { LOGIN_SAGAS, LOGIN_OTP_SAGAS, AFTER_LOGIN, AFTER_LOGIN_OTP } from '../constants/UserConstants';
import { login, loginOtp, afterLoginOtp } from '../actions/userAction';
import { browserHistory } from 'react-router';

export function* loginSagas(getState) {
	try {
		const chartsData = yield call(login, getState.containerParam);
		if (chartsData.status === 200) {
			yield put({type: AFTER_LOGIN, sagasParam: getState.containerParam});
		} else {
			console.log('error: code=' + chartsData.code);
		}
	} catch (errMsg) {
		console.log('submit form error:' + errMsg);
	}
}

export function* loginOtpSagas(getState) {
	try {
		const chartsData = yield call(loginOtp, getState.containerParam);
		console.log('############');
		console.log(chartsData.status);
		console.log(chartsData.headers.get('X-USER-TOKEN'));
		console.log('############');
		if (chartsData.status === 200) {
			yield put({type: AFTER_LOGIN_OTP, xUserToken: chartsData.headers.get('X-USER-TOKEN')});
		} else {
			console.log('error: code=' + chartsData.code);
		}
	} catch (errMsg) {
		console.log('submit form error:' + errMsg);
	}
}

function* userSagas() {
  yield [
      takeEvery(LOGIN_SAGAS, loginSagas),
      takeEvery(LOGIN_OTP_SAGAS, loginOtpSagas),
  ];
}

export default userSagas;
