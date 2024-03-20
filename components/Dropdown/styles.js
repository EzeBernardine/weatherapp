import styled from "styled-components";
import { extractObjectValueFromNestedObject } from "../../utils";


export const Wrapper = styled("div")`
    position: relative;
`;

export const Layout = styled.div`
    cursor: ${({ canClick }) =>
		canClick === undefined ? "pointer" : canClick ? "pointer" : "not-allowed"};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 250ms ease-in-out;
    svg {
        min-width: max-content;
    }
`;


export const Label = styled.span`
    color: ${({ theme, colour }) =>  extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: inherit;
    font-weight: inherit;
    padding-right: 10px;
    opacity: ${({ canClick}) => canClick ? 1 : .7};
    font-family: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10008;
    cursor: auto;
`;
export const DropdownWrap = styled.section`
    position: relative;
    top: 100%;
    padding: 0;
`;
export const Dropdown = styled.ul`
    position: absolute;
    top: 5px;
    z-index: 10009;
    border: 0;
    right: ${({ direction }) => (direction === "end" ? 0 : "auto")};
    left: ${({ direction }) => (direction === "start" ? 0 : "auto")};
    margin: 2px auto 0;
    padding: 5px 0;
    font-size: 14px;
    min-width: 160px;
    max-width: 250px;
    width: max-content;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background-clip: padding-box;
    background-color: white;
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-color:  #F0F4F8 transparent;
    scrollbar-width: thin;
	padding-top: ${({ searchField }) => searchField ? "45px" : ""};
    &::-webkit-scrollbar {
        width: 5px;
        height: 11px;
    }
    &::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: #F0F4F8 ;
    }
    &::-webkit-scrollbar-thumb:active {
        background: #F0F4F8 ;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 53px;
    }
    &::-webkit-scrollbar-track:hover {
        background: #F0F4F8;
    }
    &::-webkit-scrollbar-track:active {
        background:#F0F4F8;
    }
    &::-webkit-scrollbar-corner {
        background: transparent;
    }
`;
export const ListItems = styled.li`
    list-style: none;
    cursor: pointer;
    text-align: left;
    height: 100%;
    margin: 0;
    display: block;
    position: relative;
    min-height: unset;
    display: flex;
    padding: 10px 15px;

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows["small"]};
        background-color: ${({ theme, hovBgColor }) => extractObjectValueFromNestedObject(theme.palette, hovBgColor)};
        span{
            color: ${({ theme, dropHovColor }) => extractObjectValueFromNestedObject(theme.palette, dropHovColor)};
        }
    }
`;
export const Item = styled.span`
    height: 100%;
    flex: 1;
    color: ${({ theme, dropColor }) => extractObjectValueFromNestedObject(theme.palette, dropColor)};
    font-size: 13px;
    font-weight: ${({ weight, theme }) => extractObjectValueFromNestedObject(theme.typography.fontWeight, weight)};
`;
export const InputContainer = styled.div`
 
    width: 100%;
	right: 0;
	left: 0;
	position: absolute;
	min-width: 160px;
	z-index: 1000000;
	background-color: white;
	padding: 5px;
	input {
		border: 1px solid #E1E2E3;
		border-radius: 5px;
		box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.09);
	}
`;
export const Input = styled.input`
    color:   ${({ theme, colour }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: 13px;
    width: 100%;
    padding: 10px 15px;
    width: 148px;
    min-width: 100%;
`;
