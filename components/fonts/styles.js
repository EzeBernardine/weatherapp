 
import styled from "styled-components";
import { extractObjectValueFromNestedObject } from "../../utils";



export const Header1 = styled("h1")`
    font-family: ${({ theme, fontFamily }) => theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) =>  size ?
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "36px"
};
`;

export const Header2 = styled("h2")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "32px"
};
`;

export const Header3 = styled("h3")`
    font-family: ${({ theme, fontFamily }) => theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "30px"
};
`;

export const Header4 = styled("h4")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "28px"
};
`;

export const Header5 = styled("h5")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "26px"
};
`;

export const Paragraph = styled("p")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "16px"
};
`;
export const Bold = styled("b")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "16px"
};
  font-weight: bold;
`;

export const Span = styled("span")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "16px"
};
`;

export const Label = styled("label")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "16px"
};
`;

export const Small = styled("small")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "14px"
};
`;

export const Sub = styled("sub")`
    font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "12px"
};
`;
export const Sup = styled("sup")`
    font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "12px"
};
`;
export const Italics = styled("i")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "16px"
};
`;

export const Anchor = styled("a")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "16px"
};
  cursor: pointer;
`;
export const ListItem = styled("li")`
  font-family: ${({ theme, fontFamily }) =>
		theme.typography.fontFamily[fontFamily]};
    font-weight: ${({ theme, weight }) => weight ?  extractObjectValueFromNestedObject(theme.typography.fontWeight, weight) 	: "unset"
};
    line-height: ${({ lineHeight, theme }) =>
		theme.typography.lineHeight[lineHeight]};
    text-align: ${({ textAlign, center }) =>
		center ? "center" : textAlign ? textAlign : "initial"};
    color: ${({ colour, theme }) => extractObjectValueFromNestedObject(theme.palette, colour)};
    font-size: ${({ size, theme }) => size ? 
		extractObjectValueFromNestedObject(theme.fontSizes, size) 
		: "16px"
};
`;
