import React from 'react';

// first argument must start with a Capital letter,because this function will return a Component wrapped in a div
const withWrappedComponent = (WrappedComponent, className) => {
  return props => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
  );
};

export default withWrappedComponent;
