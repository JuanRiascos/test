import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import reduceMenu from '../../services/Menu/Reducer'


const appReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		menu: reduceMenu,
	})

const rootReducer = (history) => {
	return (state, action) => {
		return appReducer(history)(state, action)
	}
}

export default rootReducer
