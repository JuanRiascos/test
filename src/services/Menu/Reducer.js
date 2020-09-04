import { handleActions } from 'redux-actions'

export const INITIAL_STATE = {
	menus: [],
	menusPost:[],
	error: {
		get: undefined,
		post:undefined
	},
	succes: {
		get: undefined,
		post:undefined
	},
	loading: {
		get: undefined,
		post:undefined
	},
}

const reducer = handleActions(
	{
		MENUS: {
			GET_ALL: (state, { payload = {} }) => ({
				...state,
				loading: { ...state.loading, get: true },
				error: { ...state.error, get: false },
				succes: { ...state.succes, get: false },
			}),
			GET_ALL_RESPONSE: {
				next(state, { payload: { menus } }) {
					return {
						...state,
						succes: { ...state.succes, get: true },
						loading: { ...state.loading, get: false },
						menus,
					}
				},
				throw(state, { error, payload: { message } }) {
					return {
						...state,
						error: { ...state.error, get: message },
						loading: { ...state.loading, get: false },
					}
				},
			},
			POST: (state, { payload = {} }) => ({
				...state,
				loading: { ...state.loading, post: true },
				error: { ...state.error, post: false },
				succes: { ...state.succes, post: false },
			}),
			POST_RESPONSE: {
				next(state, { payload: { menusPost } }) {
					return {
						...state,
						succes: { ...state.succes, post: true },
						loading: { ...state.loading, post: false },
						menusPost,
					}
				},
				throw(state, { error, payload: { message } }) {
					return {
						...state,
						error: { ...state.error, post: message },
						loading: { ...state.loading, post: false },
					}
				},
			},
		},
	},
	INITIAL_STATE
)

export default reducer
