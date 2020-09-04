import { put, takeLatest, all } from 'redux-saga/effects'
import { menus } from './Actions'
import Api from '../../config/common/api'

function* getAll() {
	const response = yield Api.get('menu')
	if (response.data) yield put(menus.getAllResponse(response))
	else {
		const err = new TypeError('ERROR_GET_MENU')
		yield put(menus.getAllResponse(err))
	}
}
function* post({ payload }) {
	const { params } = payload
	console.log(params, 'este')
	const response = yield Api.post('contact', params)
	if (response) {
		alert('Se ha enviado su contacto')
		yield put(menus.postResponse(response))
	} else {
		alert('Ha sucedido un error al momento de registrar su contacto')
		const err = new TypeError('ERROR_POST_MENU')
		yield put(menus.postResponse(err))
	}
}

function* ActionWatcher() {
	yield takeLatest(menus.getAll, getAll)
	yield takeLatest(menus.post, post)
}

export default function* rootSaga() {
	yield all([ActionWatcher()])
}
