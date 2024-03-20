import styled from "styled-components";
import { extractObjectValueFromNestedObject } from "../../utils";




export const Flex = styled.div`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent || "center"};
    align-items: ${({ alignItems }) => alignItems || "center"};
    align-content: ${({ alignContent }) => alignContent && alignContent};
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    flex-wrap: ${({ wrap }) => wrap || "wrap"};
    flex-direction: ${({ direction }) => direction || "row"};
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ pad }) => pad || "0"};
    border-radius: ${({ radius }) => radius || "0"};
    background-color: ${({ bgColor, theme }) => bgColor ?
		extractObjectValueFromNestedObject(theme.palette, bgColor) :
		"transparent"
};
    & > * {
        min-width: 0;
    }
`; 

export const Container = styled.div`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "100%"};
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ pad }) => pad || "0"};
    background-color: ${({ bgColor, theme }) => bgColor ?
		extractObjectValueFromNestedObject(theme.palette, bgColor) :
		"transparent"
};
`;

export const Grid = styled("div")`
    display: grid;
    grid-template-columns: ${(props) => props.columns || "1fr"};
    grid-template-rows: ${(props) => props.rows || "auto"};
    grid-gap: ${(props) => props.gap || "10px"};
	margin: ${({ margin }) => margin || "0"};
    justify-content: ${({ justifyContent }) =>  justifyContent || "center"};
    align-items: ${({ alignItems }) =>  alignItems || "unset"};
    width: ${({ width }) => width || "100%"};
	padding: ${({ pad }) => pad || "0"};
	background-color: ${({ bgColor, theme }) => bgColor ?
		extractObjectValueFromNestedObject(theme.palette, bgColor) :
		"transparent"
};
    & > * {
        min-width: 0;
    }
`;

export const Frame = styled("div")`
    width: ${({ width }) => (width ? width : "100%")};
    min-width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};
    min-height: ${({ height }) => (height ? height : "100%")};
    border-radius: ${({ rounded }) => (rounded ? "100%" : "0")};
    overflow: hidden;
	position: relative;
	margin: ${({ margin }) => margin || "0"};
    & > img,
    & > canvas,
    & > video {
        min-width: 0;
        object-fit: ${({ object }) => (object ? object : "cover")};
        width: 100%;
        height: 100%;
    }
`; 