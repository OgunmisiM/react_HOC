import React from 'react';
import withCounter from './withCounter';

const ClickCounter = ({ count, increment,name}) => {
  return (
    <>
      <button onClick= {...increment}>{`${name} 
         Clicked ${count} times`}
      </button>
    </>
  );
};

export default withCounter(ClickCounter,10);
