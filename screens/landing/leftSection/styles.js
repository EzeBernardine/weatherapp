import styled from "styled-components";
import {   Flex,  } from "../../../components/Box/styles"
import { Header1, Sub } from "../../../components/fonts/styles";




 
 

export const Section1 = styled(Flex)`
	flex-basis:  35%;
	flex: 1;
	@media (max-width: 1050px) {
		flex-basis: 45%;
	} 
`;

 
 
 

export const Card = styled(Flex)`
 
	margin-right: 30px;
`;
 

export const LocationName = styled(Header1)`
 
 @media (max-width: 500px) {
		font-size: 50px;
		line-height: 58px
	} 
`;

 

export const Today = styled(Sub)`
	margin-left: 20px;
`;

 