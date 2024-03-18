import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'
import { ITranslations, LANGUAGE } from '../utils/translations'
import { Video, Videos, createClient } from 'pexels'
import { PEXELS_API_KEY } from '../utils/pexels'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/store'
import { changeTheme } from '../store/app.slice'

interface IAppContextValue {
	theme: 'light' | 'dark'
	language: 'english' | 'french'
	toggleTheme: () => void
	toggleLanguage: () => void
	text: ITranslations
	searchBarText: string
	setSearchBarText: Dispatch<SetStateAction<string>>
	isMenuSmall: boolean
	toggleMenuSize: () => void
	activeMenuText: string
	activeCategory: string
	setActiveCategory: Dispatch<SetStateAction<string>>
	videos: Video[]
	isFetchingVideos: boolean
	videoToWatch: number
	setVideoToWatch: Dispatch<SetStateAction<number>>
	videoToWatchData: Video | undefined
	fetchVideo: (id: string) => Promise<void>
}

const AppContext = createContext<IAppContextValue | null>(null)

export const useAppContext = () => {
	//custom hook
	const appContext = useContext(AppContext)

	if (!appContext) {
		throw new Error('There is no context')
	}

	return appContext
}

interface IAppContextProviderProps {
	children: ReactNode
}

const client = createClient(PEXELS_API_KEY)

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
	// const [theme, setTheme] = useState<'light' | 'dark'>('dark')
	const [language, setLanguage] = useState<'english' | 'french'>('english')
	const [searchBarText, setSearchBarText] = useState<string>('')
	const [isMenuSmall, setIsMenuSmall] = useState<boolean>(false)
	const [activeMenuText, setActiveMenuText] = useState<string>('home')
	const [activeCategory, setActiveCategory] = useState('Sports')
	const [videos, setVideos] = useState<Video[]>([])
	const [isFetchingVideos, setIsFetchingVideos] = useState<boolean>(false)
	const [videoToWatch, setVideoToWatch] = useState<number>(0)
	const [videoToWatchData, setVideoToWatchData] = useState<Video>()
	let navigate = useNavigate()

	const dispatch = useAppDispatch()

	//fetch by category: check if activeCategory exists, then fetchVideo by activeCategory
	useEffect(() => {
		activeCategory && fetchVideos(activeCategory)
	}, [activeCategory])

	//fetch by input text : check if searchBarText exists, then fetchVideo by searchBarText
	useEffect(() => {
		searchBarText && fetchVideos(searchBarText)
	}, [searchBarText])

	// if we have a video to watch, we want to redirect
	useEffect(() => {
		if (videoToWatch !== 0) {
			navigate(`/${videoToWatch}`)
		}
	}, [videoToWatch])

	const toggleTheme = () => {
		// setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
		dispatch(changeTheme())
	}

	const toggleLanguage = () => {
		setLanguage((language) => (language === 'english' ? 'french' : 'english'))
	}

	const toggleMenuSize = () => {
		setIsMenuSmall((state) => !state)
	}

	const fetchVideos = async (query: string) => {
		setIsFetchingVideos(true)
		try {
			const response = await client.videos.search({ query, per_page: 44 })
			console.log('Response', (response as Videos).videos)
			setVideos((response as Videos).videos)
		} catch (error) {
			console.log('There was an error fetching videos')
		}
		setIsFetchingVideos(false)
	}

	const fetchVideo = async (id: string) => {
		setIsFetchingVideos(true)
		try {
			const response = await client.videos.show({ id })
			setVideoToWatchData(response as Video)
		} catch (error) {
			console.log('There was an error fetching video')
		}
		setIsFetchingVideos(false)
	}

	const value = {
		//theme, // or theme: theme,
		theme: useAppSelector((state) => state.app.theme),
		language,
		toggleTheme,
		toggleLanguage,
		text: LANGUAGE[language],
		searchBarText,
		setSearchBarText,
		isMenuSmall,
		toggleMenuSize,
		activeMenuText: LANGUAGE[language][activeMenuText as keyof ITranslations],
		activeCategory,
		setActiveCategory,
		videos,
		isFetchingVideos,
		videoToWatch,
		setVideoToWatch,
		videoToWatchData,
		fetchVideo,
	}
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
