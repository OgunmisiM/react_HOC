import React, { useState } from 'react';

const withCounter = (WrappedComponent, increase) => {
  function WithCounter(props) {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount((prevCount) => prevCount + increase);
    };
    return <WrappedComponent count={count} increment={increment} {...props} />;
  }
  return WithCounter;
};

export default withCounter;
