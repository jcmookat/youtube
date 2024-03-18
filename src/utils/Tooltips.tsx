import { Tooltip } from 'react-tooltip'

const Tooltips = () => {
	const TOOLTIPS = ['settings', 'search', 'voiceSearch']
	return (
		<>
			{TOOLTIPS.map((id, index) => (
				<Tooltip id={id} key={index} style={{ zIndex: '9999' }} noArrow />
			))}
		</>
	)
}
export default Tooltips
