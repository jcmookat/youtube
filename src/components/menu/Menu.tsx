import { Fragment } from 'react'
import { useAppContext } from '../../context/App.context'
import { ITranslations } from '../../utils/translations'
import { MENU_LARGE, MENU_SMALL } from '../../utils/SideMenu'
import { Text } from '../../utils/Text.styles'
import AuthButton from '../authButton/AuthButton'
import { LargeMenuSection, MenuItem, StyledMenu } from './Menu.styles'

const Menu = () => {
	const { isMenuSmall, text, activeMenuText } = useAppContext()

	if (isMenuSmall) {
		return (
			<StyledMenu>
				{MENU_SMALL.map(({ name, icon }, index) => (
					<MenuItem
						$active={
							activeMenuText.toLowerCase() ===
							text[name as keyof ITranslations].toLowerCase()
						}
						className='small'
						key={index}>
						{icon}
						<Text>{text[name as keyof ITranslations]}</Text>
					</MenuItem>
				))}
			</StyledMenu>
		)
	} else {
		return (
			<StyledMenu>
				{MENU_LARGE.map(({ title, list }, index) => (
					<Fragment key={index}>
						<LargeMenuSection>
							{title && (
								<Text className='title'>
									{text[title as keyof ITranslations]}
								</Text>
							)}
							{list.map(({ name, icon }) => (
								<MenuItem
									$active={
										activeMenuText.toLowerCase() ===
										text[name as keyof ITranslations].toLowerCase()
									}
									className='large'
									key={name}>
									{icon}
									<Text>{text[name as keyof ITranslations]}</Text>
								</MenuItem>
							))}
						</LargeMenuSection>
						{index === 1 && (
							<LargeMenuSection className='text'>
								<Text>{text.signInMenuText}</Text>
								<AuthButton />
							</LargeMenuSection>
						)}
					</Fragment>
				))}
			</StyledMenu>
		)
	}
}
export default Menu
