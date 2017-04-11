import React, { PropTypes } from 'react';

let transformPropertyName;

const getTransformPropertyName = () => {
  if (typeof document === 'undefined') {
    return 'transform';
  }
  if (!transformPropertyName) {
    const el = document.createElement('div');
    transformPropertyName = ('transform' in el.style) ? 'transform' : '-webkit-transform';
  }
  return transformPropertyName;
};

const propTypes = {
  scaleX: PropTypes.number,
  scaleY: PropTypes.number,
  style: PropTypes.object,
};

const ScaledComponent = (WrappedComponent) => {
  const Transformer = ({ scaleX, scaleY, style, ...otherProps }) => {
    const transformProperty = getTransformPropertyName();
    return (
      <WrappedComponent
        style={{
          [transformProperty]: `scale(${scaleX}, ${scaleY})`,
          ...style,
        }}
        {...otherProps}
      />
    );
  };
  Transformer.propTypes = propTypes;
  return Transformer;
};
export default ScaledComponent;
