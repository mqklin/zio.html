import { Default } from "../Default/default.style";
const DefaultStyle = Default.withComponent("h3");

const sizes = {
  xs: "0.67em",
  sm: "0.83em",
  md: "1.17em",
  lg: "1.5em",
  xl: "2em"
};

export const HTag = DefaultStyle.extend`
  font-size: ${props =>
    props.size
      ? sizes[props.size]
      : props.fontSize ? props.fontSize : sizes.md};
  text-transform: ${props => props.textTransform || "none"};
  display: ${props => props.display || "block"};
`;
