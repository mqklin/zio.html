import { css } from "styled-components";
let gridVariables = {};
gridVariables.screenSmMin = 768;
gridVariables.screenMdMin = 992;
gridVariables.screenLgMin = 1200;

gridVariables.screenXsMax = gridVariables.screenSmMin - 1;
gridVariables.screenSmMax = gridVariables.screenMdMin - 1;
gridVariables.screenMdMax = gridVariables.screenLgMin - 1;

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
