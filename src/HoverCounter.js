import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({ count, increment, secretWord }) => {
  return (
    <>
      <h2 onMouseOver={increment}>
        Hovered {count} times {secretWord}
      </h2>
    </>
  );
};

export default withCounter(HoverCounter,5);
