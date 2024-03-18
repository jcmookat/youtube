import { Setting, StyledSettings } from './Settings.styles'
import { GoMoon } from 'react-icons/go'
import { HiLanguage } from 'react-icons/hi2'
import { Text } from '../../utils/Text.styles'
import { useAppContext } from '../../context/App.context'

const Settings = () => {
	const { theme, language, toggleLanguage, toggleTheme, text } = useAppContext()
	const SETTINGS = [
		{
			label: text.language,
			icon: <HiLanguage size={23} />,
			value: text[language === 'english' ? 'french' : 'english'],
			onClick: () => toggleLanguage(),
		},
		{
			label: text.appearance,
			icon: <GoMoon size={23} />,
			value: text[theme === 'light' ? 'dark' : 'light'],
			onClick: () => toggleTheme(),
		},
	]
	return (
		<StyledSettings>
			{SETTINGS.map(({ label, icon, value, onClick }, key) => (
				<Setting key={key} onClick={onClick}>
					{icon}
					<Text>{`${label} : ${value}`}</Text>
				</Setting>
			))}
		</StyledSettings>
	)
}
export default Settings
