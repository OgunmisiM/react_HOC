import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

function App() {
  return (
    <div>
      <ClickCounter name="femi" />
      <HoverCounter secretWord='pineapple' />
    </div>
  );
}

export default App;
