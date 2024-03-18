import styled from 'styled-components'

export const StyledAuthButton = styled.div`
	align-items: center;
	border: 2px solid ${({ theme }) => theme.grey2};
	border-radius: 10rem;
	color: ${({ theme }) => theme.authBlue};
	display: flex;
	gap: 0.5rem;
	justify-content: center;
	padding: 0.4rem 0.7rem;
	width: max-content;
`
