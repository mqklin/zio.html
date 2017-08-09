import React, { Component } from 'react';
import { string,object, oneOf,node } from "prop-types";
import { HTag } from "./H.style";
import './H.css';


/**
 * The HTML H1,H2,H3,H4,H5,H6,
 * @param {Object} extraStyle  Extra Tag Styling using styled-components
 * @param {string} className  Extra Tag Styling using css
 * @param {string} size The size of font size
 * xs: 0.67em
 * sm: 0.83em
 * md: 1.17em
 * lg: 1.5em
 * xl: 2em
 * @param {mix} children The innerHTML what would be inside the tag text or another Tag *Better not to use another tag*
 */
class H extends Component {
  static propTypes = {
    className: string,
    extraStyle: object,
    size: oneOf(['xs','sm','md','lg','xl']),
    children: node.isRequired
  }
  render() {
    const {
      children:innerHTML,
      extraStyle,
      size,
      className:externalStylingClass
    } = this.props;
    return (
      <HTag style={extraStyle} className={`zio_html-h ${ externalStylingClass }`} size={size}>
        {innerHTML}
      </HTag>
    )
  }
}

export default H;
