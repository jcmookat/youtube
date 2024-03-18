import { FaYoutube } from 'react-icons/fa'
import { SlMenu } from 'react-icons/sl'
import { LuSearch } from 'react-icons/lu'
import { CgMoreVerticalAlt } from 'react-icons/cg'
import { FaMicrophone } from 'react-icons/fa'
import { Text } from '../../utils/Text.styles'
import {
	HeaderMoreSection,
	LeftSection,
	LogoSection,
	SearchBar,
	SearchSection,
	StyledHeader,
} from './Header.styles'
import { Icon } from '../../utils/Icon.styles'
import AuthButton from '../authButton/AuthButton'
import { MouseEventHandler, useEffect, useState } from 'react'
import Settings from '../settings/Settings'
import { useAppContext } from '../../context/App.context'
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition'
import { useLocation } from 'react-router-dom'

const Header = () => {
	const [showSettings, setShowSettings] = useState<boolean>(false)
	const [searchText, setSearchText] = useState<string>('')

	//import the values you need to use from app context
	const { text, setSearchBarText, toggleMenuSize } = useAppContext()

	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition()

	const { pathname } = useLocation()

	useEffect(() => {
		setSearchText(transcript)
		setSearchBarText(transcript)
	}, [transcript])

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>
	}

	const isHomePath = pathname.length === 1

	if (isHomePath) {
		document.title = 'Youtube'
	}

	return (
		<StyledHeader>
			<LeftSection>
				<Icon
					className={`${!isHomePath && 'disabled'} menu`}
					onClick={() => toggleMenuSize()}>
					<SlMenu size={17} />
				</Icon>
				<LogoSection to='/'>
					<FaYoutube color='#FF0000' size={30} />
					<Text className='logo'>YouTube</Text>
				</LogoSection>
			</LeftSection>
			<SearchSection>
				<SearchBar>
					<input
						value={searchText}
						placeholder={text.search}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<Icon
						data-tooltip-id='search'
						data-tooltip-content={text.search}
						onClick={() => setSearchBarText(searchText)}>
						<LuSearch size={19} />
					</Icon>
				</SearchBar>
				<Icon
					data-tooltip-id='voiceSearch'
					data-tooltip-content={text.voiceSearch}
					onClick={
						SpeechRecognition.startListening as MouseEventHandler<HTMLDivElement>
					}
					$showBackground
					className={listening ? 'listening' : ''}>
					<FaMicrophone size={19} />
				</Icon>
			</SearchSection>
			<HeaderMoreSection>
				<Icon
					data-tooltip-id='settings'
					data-tooltip-content={text.settings}
					onClick={() => setShowSettings((currentState) => !currentState)}>
					<CgMoreVerticalAlt size={21} />
				</Icon>
				<AuthButton />
				{showSettings && <Settings />}
			</HeaderMoreSection>
		</StyledHeader>
	)
}
export default Header
