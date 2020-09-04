import { createActions } from 'redux-actions'

export const { menus } = createActions({
	MENUS: {
		GET_ALL: () => ({}),
		GET_ALL_RESPONSE: (menus) => ({ menus }),

		POST: (params) => ({params}),
		POST_RESPONSE: (menusPost) => ({ menusPost }),
	},
})
