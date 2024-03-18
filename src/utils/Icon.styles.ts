import styled, { keyframes } from 'styled-components'

const beats = keyframes`
	0% { 
		transform: scale(0.8);
	}
	50% { 
		transform: scale(1.1);
	}
	100% { 
		transform: scale(0.8);
	}
`

export const Icon = styled.div<{ $showBackground?: boolean }>`
	align-items: center;
	background-color: ${({ theme, $showBackground }) =>
		$showBackground ? theme.grey2 : 'transparent'};
	border-radius: 100rem;
	/* color: ${(props) => props.theme.text}; */
	color: ${({ theme }) => theme.text};
	display: flex;
	justify-content: center;
	padding: 0.6rem;
	cursor: pointer;

	&.menu {
		&:hover {
			/* background-color: ${(props) => props.theme.grey2}; */
			background-color: ${({ theme }) => theme.grey2};
		}
	}

	&.listening {
		background-color: ${({ theme }) => theme.youtubeRed};
		animation: ${beats} 1s linear infinite;
		color: ${({ theme }) => theme.white};
	}

	&.disabled {
		&:hover {
			cursor: not-allowed;
		}
	}
`
