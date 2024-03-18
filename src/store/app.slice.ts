import { createSlice } from '@reduxjs/toolkit'
// import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IAppState {
	theme: 'light' | 'dark'
}

const initialState: IAppState = {
	theme: 'dark',
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		changeTheme(state) {
			state.theme = state.theme === 'light' ? 'dark' : 'light'
		},
	},
})

// IF there's an action
// export const appSlice = createSlice({
// 	name: 'app',
// 	initialState,
// 	reducers: {
// 		changeTheme(state, action : PayloadAction<{id: string, ... ...}>) {
// 			state.theme = state.theme === 'light' ? 'dark' : 'light'
// 		},
// 	},
// })

export const { changeTheme } = appSlice.actions
