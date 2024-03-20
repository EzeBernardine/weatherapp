

import styled from "styled-components";
import { Flex } from "../Box/styles";

  
export const SearchContainer =  styled(Flex)`
    border: 1px  solid ${({ theme}) => theme.palette.Black[60]};
	opacity: ${({ active }) => active ? 1 : 0.6};
	&:hover {
		opacity: 1;
	}
    input {
        padding:  9px 10px;
        flex: 1;
		font-size: 18px;
		color: black;
    }
    width: 100%;
	svg {
		margin-right: 20px;
	}
`;
 