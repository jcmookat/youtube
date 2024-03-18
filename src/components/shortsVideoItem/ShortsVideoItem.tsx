import { useState } from 'react'
import {
	StyledShortsVideoItem,
	StyledShortsVideoThumbnail,
} from './ShortsVideoItem.styles'
import { useAppContext } from '../../context/App.context'
import ReactPlayer from 'react-player'
import { Video } from 'pexels'
import { Text } from '../../utils/Text.styles'
import { getTitle } from '../../utils/videos'

//interface usually starts with I, component name, end with props
interface IShortsVideoItemProps {
	video: Video
}

const ShortsVideoItem = ({ video }: IShortsVideoItemProps) => {
	const [playTrailer, setPlayTrailer] = useState<boolean>(false)
	const { isMenuSmall, setVideoToWatch } = useAppContext()
	const TITLE_LENGTH = 50

	return (
		<StyledShortsVideoItem
			onMouseOver={() => setPlayTrailer(true)}
			onMouseOut={() => setPlayTrailer(false)}
			onClick={() => setVideoToWatch(video.id)}>
			<StyledShortsVideoThumbnail $isMenuSmall={isMenuSmall}>
				{playTrailer ? (
					<ReactPlayer
						width='100%'
						height='100%'
						controls={false}
						muted={true}
						volume={0}
						style={{ height: '100%', width: '100%' }}
						playing={playTrailer}
						url={video.video_files[0].link}
					/>
				) : (
					<img src={video.image} alt='thumbnail' />
				)}
			</StyledShortsVideoThumbnail>
			<Text className='videoItemTitle'>
				{getTitle(video.url).slice(0, TITLE_LENGTH)}
				{getTitle(video.url).length > TITLE_LENGTH && '...'}
			</Text>
			<Text className='details'>{video.duration}M views</Text>
		</StyledShortsVideoItem>
	)
}
export default ShortsVideoItem
