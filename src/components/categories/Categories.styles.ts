import styled from 'styled-components'

export const CategoriesCarousel = styled.div`
	width: 100%;
	overflow-x: scroll;
`
export const StyledCategories = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	position: relative;
	padding-bottom: 0.6rem;
	z-index: 100;
	padding-right: 10rem;
`
export const CategoryItem = styled.li<{ $active: boolean }>`
	background-color: ${({ theme, $active }) =>
		$active ? theme.text : theme.divider};
	padding: 0.5rem 0.8rem;
	border-radius: 0.5rem;
	white-space: nowrap;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		color: ${({ theme, $active }) => ($active ? theme.divider : theme.text)};
	}

	&:hover {
		cursor: pointer;
	}
`
