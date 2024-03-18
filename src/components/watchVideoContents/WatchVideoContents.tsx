import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/App.context'
import Categories from '../categories/Categories'
import RegularVideoItem from '../regularVideoItem/RegularVideoItem'
import {
	DetailsActionButton,
	DetailsActions,
	MoreVideosContainer,
	StyledWatchVideoContents,
	SubscribeButton,
	UserAccount,
	VideoDescription,
	VideoDetails,
	VideoDetailsActions,
	VideoDetailsInfo,
	VideoScreen,
	WatchVideosContainer,
} from './WatchVideoContents.styles'
import { useEffect } from 'react'
import { getTitle } from '../../utils/videos'
import { LoadingBackdrop } from '../content/Content.styles'
import ReactPlayer from 'react-player'
import { Text } from '../../utils/Text.styles'
import { faker } from '@faker-js/faker'
import { RegularVideoPic } from '../regularVideoItem/RegularVideoItem.styles'
import { HiDotsHorizontal } from 'react-icons/hi'
import { PiListPlusFill } from 'react-icons/pi'
import { IoArrowRedoOutline } from 'react-icons/io5'
import { TiThumbsUp, TiThumbsDown } from 'react-icons/ti'

const WatchVideoContents = () => {
	const { videos, fetchVideo, videoToWatchData, isFetchingVideos, text } =
		useAppContext()
	const { id } = useParams() // get ID from url param

	const videoTitle = getTitle(videoToWatchData?.url!)
	// or (videoToWatchData?.url as string) ! operator is telling that it is not undefined
	// or (videoToWatchData?.url + "")

	document.title = videoTitle

	useEffect(() => {
		if (id) {
			fetchVideo(id)
		}
	}, [id])

	if (isFetchingVideos) {
		return <LoadingBackdrop />
	}
	return (
		<StyledWatchVideoContents>
			<WatchVideosContainer>
				<VideoScreen>
					<ReactPlayer
						width='100%'
						height='100%'
						controls={true}
						muted={true}
						volume={0}
						style={{ height: '100%', width: '100%' }}
						playing={true}
						url={videoToWatchData?.video_files[0].link}
					/>
				</VideoScreen>
				<VideoDetails>
					<Text className='videoScreenTitle'>{videoTitle}</Text>
					<VideoDetailsActions>
						<VideoDetailsInfo>
							<RegularVideoPic>
								<img src={videoToWatchData?.image} alt='profile pic' />
							</RegularVideoPic>
							<UserAccount>
								<Text className='name'>{videoToWatchData?.user.name}</Text>
								<Text className='subscribers'>
									{videoToWatchData?.duration}k {text.subscribers}
								</Text>
							</UserAccount>
							<SubscribeButton>{text.subscribe}</SubscribeButton>
						</VideoDetailsInfo>
						<DetailsActions>
							<DetailsActionButton>
								<>
									<TiThumbsUp size={21} />
									<Text>{videoToWatchData?.duration}</Text>
								</>
								<span className='divider'>&nbsp;</span>
								<TiThumbsDown size={21} />
							</DetailsActionButton>
							<DetailsActionButton>
								<IoArrowRedoOutline size={21} /> <Text>{text.share}</Text>
							</DetailsActionButton>
							<DetailsActionButton>
								<PiListPlusFill size={21} /> <Text>{text.save}</Text>
							</DetailsActionButton>
							<DetailsActionButton>
								<HiDotsHorizontal size={21} />
							</DetailsActionButton>
						</DetailsActions>
					</VideoDetailsActions>
					<VideoDescription>
						<Text>{faker.lorem.paragraphs(5)}</Text>
					</VideoDescription>
				</VideoDetails>
			</WatchVideosContainer>
			<MoreVideosContainer>
				<Categories />
				{videos.map((video, index) => (
					<RegularVideoItem smallView key={index} video={video} />
				))}
			</MoreVideosContainer>
		</StyledWatchVideoContents>
	)
}
export default WatchVideoContents
