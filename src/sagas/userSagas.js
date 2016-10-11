import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { browserHistory } from 'react-router';

// export function* loginSagas(getState) {
// 	try {
// 		const chartsData = yield call(login, getState.user);
// 		if (chartsData.status === 200) {
// 			yield put({type: AFTER_LOGIN, user: getState.user});
// 		} else {
// 			console.log('error: code=' + chartsData.code);
// 		}
// 	} catch (errMsg) {
// 		console.log('submit form error:' + errMsg);
// 	}
// }

// export function* loginOtpSagas(getState) {
// 	try {
// 		const chartsData = yield call(loginOtp, getState.userOtp);
// 		if (chartsData.status === 200) {
// 			yield put({type: AFTER_LOGIN_OTP, xUserToken: chartsData.headers.get('X-USER-TOKEN')});
// 		} else {
// 			console.log('error: code=' + chartsData.code);
// 		}
// 	} catch (errMsg) {
// 		console.log('submit form error:' + errMsg);
// 	}
// }

function* userSagas() {
  yield [
  ];
}

export default userSagas;
