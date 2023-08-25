import React, { useState } from 'react';

// accepting parameter from child components.
// const withCounter = (WrappedComponent, increase) => {

const withCounter = (WrappedComponent) => {
  // passed props to be visible for child components
  function WithCounter(props) {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };
    return <WrappedComponent count={count} increment={increment} {...props} />;
  }
  return WithCounter;
};

export default withCounter;
