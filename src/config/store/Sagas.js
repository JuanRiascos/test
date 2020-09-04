import { fork, all } from 'redux-saga/effects'

import MenuSaga from '../../services/Menu/Saga'

export default function* rootSaga() {
	yield all([fork(MenuSaga)])
}
