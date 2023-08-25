import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({ count, increment }) => {
  // console.log({ secretWord });
  return (
    <>
      <h2 onMouseOver={increment}>Hovered {count} times</h2>
    </>
  );
};
// Using parameters in HOC
// export default withCounter(HoverCounter, 5);

export default withCounter(HoverCounter);
