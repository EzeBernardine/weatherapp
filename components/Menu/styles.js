

import styled from "styled-components";
import { Flex } from "../Box/styles";

  
export const MenuContainer =  styled("menu")`
    background-color:${({ theme}) => theme.palette.common.white};
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	margin: 0;
	padding: 20px 8%;
	z-index: 100;
	@media (max-width: 500px) {
		position: relative;
	}
`;
 
export const MainContainer =  styled(Flex)`
	@media (max-width: 700px) {
		display:  grid;
		grid-gap: 20px;
		justify-content: stretch;
	}
`;
export const SubContainer =  styled(Flex)`
	@media (max-width: 500px) {
		display:  grid;
		grid-gap: 20px;
		width: 100%;
		justify-content: stretch;
	
	}
`;
 



export const SaerchContainer =  styled(Flex)`
    border: 1px solid #c4c4c4;
	border-radius: 8px;
	min-width: unset;
	justify-content: stretch;
    & > div {
		max-width: 100px;
		width: 100px;
		min-width: 100px;
		border:  none;
		border-radius: 8px;
		input {
			text-align: center;
			border-radius: 0;
		}
		&:nth-child(1) {
			border-radius: 8px 0 0 8px;
			border-right: 1px solid #c4c4c4;
		}
	};
	@media (max-width: 500px) {
		width: 100%;
		& > div {
			flex: 1;
			max-width: unset;
		}
	}
`;
 
export const Button =  styled("button")`
    color:   ${({ theme}) => theme.palette.Warning["default"]};
	min-width: auto;
	margin-left: 10px;
	&:disabled{
		cursor: not-allowed;
		color:   ${({ theme}) => theme.palette.Black["40"]};
	}
`;
 
 
export const DeleteButton =  styled("button")`
    color:   ${({ theme}) => theme.palette.Error["80"]};
	min-width: auto;
	margin-left: 10px;
	 
`;
 

 
export const SecletContainer = styled(Flex)`
	height: auto;
	min-height: auto;
	& > div {
		width: 100%;
		border: 1px solid  ${({ theme }) => theme?.palette?.Black["80"] };
		border-radius: 8px;
		& > div {
			padding: 10px;
			justify-content: space-between;
		}
		&> section ul  {
			width: 100%;
			max-width: unset;
		}
	}
	@media (max-width: 500px) {
		width: 100%;
		margin: 0;
	}
`;