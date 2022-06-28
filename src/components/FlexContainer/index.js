import React from "react";
import { PropTypes } from 'prop-types';

const FlexContainer = (props) => {
  const { fd, fw, jc, ai, style, children, ...restProps } = props;
  const styleFlex = {
    ...style,
    display: "flex",
    flexDirection: fd,
    flexWrap: fw,
    alignItems: ai,
    justifyContent: jc,
  };
  return (
    <div style={styleFlex} {...restProps}>
      {children}
    </div>
  );
};

FlexContainer.defaultProps = {
  fd:'row',
  fw:'wrap',
  jc:'flex-start',
  ai:'stretch',
};

FlexContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  fd:PropTypes.string,
  fw:PropTypes.string,
  jc:PropTypes.string,
  ai:PropTypes.string,
}

export default FlexContainer;
