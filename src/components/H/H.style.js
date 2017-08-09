import styled from 'styled-components'

const sizes = {
  xs: "0.67em",
  sm: "0.83em",
  md: "1.17em",
  lg: "1.5em",
  xl: "2em"
};

export const HTag = styled.h3`
  font-size: ${props =>
    props.size
      ? sizes[props.size]
      : props.fontSize ? props.fontSize : sizes.md};
`;
