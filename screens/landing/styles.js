import styled from "styled-components";
import { Container, Flex,  } from "../../components/Box/styles"






export const MainStyle = styled(Flex)`

`;

export const BackgroundStyle = styled(Flex)`
	position: absolute;
	right: 0;
	left: 0;
	bottom: 0;
	top: 0;
	z-index: -1;
	&:before {
		background: linear-gradient(#638fc480,#638fc4ed,#638fc480);
		position: absolute;
		right: 0;
		left: 0;
		bottom: 0;
		top: 0;
		z-index: 10;
		content: "";
		@media (max-width: 600px) {
			background-color: #09090994;
		}
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

export const MajorStyle = styled(Container)`
	position: relative;
	padding: 150px 8% 100px;
	@media (max-width: 400px) {
		padding: 70px 4%;
	}
`;

export const SearchStyle = styled(Flex)`
	max-width: 600px;
	margin: auto;
	& > div {
		width: 100%;
	}
	input {
		padding:  20px 30px !important;
	}
`;
 

export const SectionContainer = styled(Flex)`
	@media (max-width: 800px) {
		flex-direction: column;
	}
`;
 