import React, { Component } from 'react';
import PropTypes from "prop-types";
import { HTag } from "./H.style";

/**
 * The HTML H1,H2,H3,H4,H5,H6
 */
class H extends Component {
  render() {
    const { children:innerHTML,extraStyle,size } = this.props;
    return (
      <HTag style={extraStyle} size={size}>
        {innerHTML}
      </HTag>
    )
  }
}

H.propTypes = {
  /**
  * Extra Tag Styling
  */
  extraStyle:PropTypes.object,
  /**
  * The size of font size
  * xs: 0.67em
  * sm: 0.83em
  * md: 1.17em
  * lg: 1.5em
  * xl: 2em
  */
  size:PropTypes.oneOf(['xs','sm','md','lg','xl']).isRequired,
  /**
  * The innerHTML what would be inside the tag text or another Tag *Better not to use another tag*
  */
  children: PropTypes.node.isRequired
};


export default H;
