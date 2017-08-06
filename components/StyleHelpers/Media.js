import { css } from "styled-components";
import gridVariables from "../Grid/GridVariables";
const sizes = {
  lg: gridVariables.screenLgMin,
  md: gridVariables.screenMdMax,
  sm: gridVariables.screenSmMax,
  xs: gridVariables.screenXsMax
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users

  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
