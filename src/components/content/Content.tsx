import { useAppContext } from '../../context/App.context'
import Categories from '../categories/Categories'
import HomepageVideos from '../homepageVideos/HomepageVideos'
import { LoadingBackdrop, StyledContent } from './Content.styles'

const Content = () => {
	const { isFetchingVideos } = useAppContext()
	return (
		<StyledContent>
			<Categories />
			<HomepageVideos />
			{isFetchingVideos && <LoadingBackdrop />}
		</StyledContent>
	)
}
export default Content
