interface ITHEME {
	authBlue: string
	backdrop: string
	background: string
	black: string
	divider: string
	grey1: string
	grey2: string
	grey3: string
	settingsBg: string
	settingsShadow: string
	text: string
	youtubeRed: string
	white: string
}

export const darkTheme: ITHEME = {
	authBlue: '#3DA6FF',
	backdrop: '#000000',
	background: '#0F0F0F',
	black: '#000000',
	divider: '#272727',
	grey1: '#272727',
	grey2: '#373739',
	grey3: '#A9A9A9',
	settingsBg: '#282828',
	settingsShadow: '#0E0E0E',
	text: '#FFFFFF',
	youtubeRed: '#FF0000',
	white: '#FFFFFF',
}

export const lightTheme: ITHEME = {
	authBlue: '#3DA6FF',
	backdrop: '#000000',
	background: '#FFFFFF',
	black: '#000000',
	divider: '#CCCCCC',
	grey1: '#272727',
	grey2: '#F2F2F2',
	grey3: '#606060',
	settingsBg: '#FFFFFF',
	settingsShadow: '#E1E1E1',
	text: '#000000',
	youtubeRed: '#FF0000',
	white: '#FFFFFF',
}

export const THEMES = {
	dark: darkTheme,
	light: lightTheme,
}

declare module 'styled-components' {
	export interface DefaultTheme extends ITHEME {}
}
