import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { LOGIN_SAGAS, LOGIN_OTP_SAGAS } from '../constants/UserConstants';
import { login, afterLogin, loginOtp, afterLoginOtp } from '../actions/userAction';
import { browserHistory } from 'react-router';

export function* loginSagas(getState) {
	try {
		console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
		const chartsData = yield call(login, getState.intermedia);
		console.log('--------');
		console.log(chartsData);
		console.log('-------');
		if (chartsData.status === 200) {
			yield put(afterLogin(getState.intermedia));
			browserHistory.push('/loginotp');
		} else {
			console.log('error: code=' + chartsData.code);
		}
	} catch (errMsg) {
		console.log('submit form error:' + errMsg);
	}
}

export function* loginOtpSagas(getState) {
	try {
		console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
		const chartsData = yield call(loginOtp, getState.intermedia);
		console.log('--------');
		console.log(chartsData);
		console.log('-------');
		if (chartsData.status === 200) {
			yield put(afterLoginOtp(getState.intermedia));
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
