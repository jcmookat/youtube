import { useAppContext } from '../../context/App.context'
import RegularVideoItem from '../regularVideoItem/RegularVideoItem'
import VideoShorts from '../videoShorts/VideoShorts'
import {
	RegularVideoThumbnailsContainer,
	StyledHomepageVideos,
} from './HomepageVideos.styles'

const HomepageVideos = () => {
	const { videos } = useAppContext()

	const FIRST_VIDEO_SECTION = videos.slice(0, 8)
	const SECOND_VIDEO_SECTION = videos.slice(8, 20)
	const THIRD_VIDEO_SECTION = videos.slice(20, 28)

	return (
		<StyledHomepageVideos>
			<RegularVideoThumbnailsContainer>
				{FIRST_VIDEO_SECTION.map((video, index) => (
					<RegularVideoItem key={index} video={video} />
				))}
			</RegularVideoThumbnailsContainer>
			<VideoShorts videos={SECOND_VIDEO_SECTION} />
			<RegularVideoThumbnailsContainer>
				{THIRD_VIDEO_SECTION.map((video, index) => (
					<RegularVideoItem key={index} video={video} />
				))}
			</RegularVideoThumbnailsContainer>
		</StyledHomepageVideos>
	)
}
export default HomepageVideos
