import styled from "styled-components";
import { Container, Flex, Grid} from "../../../components/Box/styles"
import { Bold, Small } from "../../../components/fonts/styles";



 
 
 
export const Section2 = styled(Flex)`
	flex-basis:  35%;
	flex-direction: column;
	flex: 1;
	@media (max-width: 1050px) {
		flex-basis: 45%;
	}
	@media (max-width: 800px) {
		align-items: flex-start;
		border-top: 1px solid ${({ theme }) => theme.palette.Black[10]};
	} 
`;
export const SectionSub1 = styled(Grid)`
	max-width: 400px;
	background: #00000045;
	padding: 20px;
	border-radius: 4px;
`;
export const TemperatureContainer = styled(Flex)`
	flex-basis:  45%;
	@media (max-width: 800px) {
		margin: 0 0 70px 0
	} 
`;

export const TemperatureValue = styled(Bold)`
	position: relative;
	min-width: auto;
	@media (max-width: 800px) {
		font-size: 60px;
		line-height: 68px
	} 

	&:before {
		content: "0";
		position: absolute;
		right: 40px;
		top: 11px;
		font-size: 21px;
		line-height: 28px;
		@media (max-width: 500px) {
			right: 30px;
		} 
	}
`;

export const TemperatureUnit = styled(Small)`
	font-size: 14px;
	line-height: 16px;
	font-weight: 300;
	font-family: ${({ theme }) => theme.typography.fontFamily.light};
	background-color: #3031328a;
	padding: 2px 8px;
	border-radius: 10px;
	align-items: center;
`


export const CardStyles = styled(Flex)`
	flex-wrap: nowrap;
	 
	span {
		padding-right: 10px;
	}
`;