import styled from "styled-components";
import { clearfix } from "../StyleHelpers/ClearFix";
export const Default = styled.div`
  font-size: ${props => props.fontSize || "12px"};
  color: ${props => props.color || "#413D3B"};
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: ${props => props.lineHeight || "normal"};
  text-align: ${props => props.textAlign || "left"};

  vertical-align: ${props => props.verticalAlign || "baseline"};

  display: ${props => props.display || "inline"};

  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};

  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};

  background-color: ${props => props.backgroundColor || "transparent"};

  border: ${props => props.border || "0 solid transparent"};
  border-radius: ${props => props.borderRadius || "0"};

  box-shadow: ${props => props.boxShadow || "0 0 0 0 transparent"};

  transition: ${props => props.transition || "all .15s linear"};

  ${props => props.clearfix && clearfix()};
`;
