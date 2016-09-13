import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { SUBMIT_FORM_DATA } from '../constants/AppConstants';
import { asyncSubmitForm, updateAlreadySubmit } from '../actions/rentAction';

export function* submitFormData(getState) {
	try {
		const chartsData = yield call(asyncSubmitForm, getState.intermedia);
		if (chartsData.code === 0) {
			yield put(updateAlreadySubmit());
		} else {
			console.log('error: code=' + chartsData.code);
		}
	} catch (errMsg) {
		console.log('submit form error:' + errMsg);
	}
}

function* report() {
	yield* takeEvery(SUBMIT_FORM_DATA, submitFormData);
}

export default report;
