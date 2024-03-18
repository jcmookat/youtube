import { Video } from 'pexels'
import { SiYoutubeshorts } from 'react-icons/si'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import {
	MoreLessButton,
	MoreLessContainer,
	ShortsVideosContainer,
	StyledVideoShorts,
	VideoShortsHeading,
} from './VideoShorts.styles'
import { Text } from '../../utils/Text.styles'
import { useAppContext } from '../../context/App.context'
import { useState } from 'react'
import ShortsVideoItem from '../shortsVideoItem/ShortsVideoItem'

interface IVideoShortsProps {
	videos: Video[]
}

const VideoShorts = ({ videos }: IVideoShortsProps) => {
	const { text } = useAppContext()
	const [showLess, setShowLess] = useState<boolean>(true)
	const videosList = showLess ? videos.slice(0, videos.length / 2) : videos
	return (
		<StyledVideoShorts>
			<VideoShortsHeading>
				<SiYoutubeshorts size={25} color='red' />
				<Text>{text.shorts}</Text>
			</VideoShortsHeading>
			<ShortsVideosContainer>
				{videosList.map((video, index) => (
					<ShortsVideoItem video={video} key={index} />
				))}
			</ShortsVideosContainer>
			<MoreLessContainer>
				<MoreLessButton onClick={() => setShowLess((state) => !state)}>
					<Text>{showLess ? text.showMore : text.showLess}</Text>
					{showLess ? (
						<IoIosArrowDown className='icon' size={20} />
					) : (
						<IoIosArrowUp className='icon' size={20} />
					)}
				</MoreLessButton>
			</MoreLessContainer>
		</StyledVideoShorts>
	)
}
export default VideoShorts
