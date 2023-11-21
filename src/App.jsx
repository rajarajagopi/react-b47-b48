import React, { useState } from 'react';

function Display({counter}) {
  return (
    <div>{counter}</div>
  )
}
function App() {
  const [counter, setCounter] = useState(0);

  
  const handlePlusClick = () => {
    // console.log('button clicked');
    setCounter(counter + 1);
  }
  const handleZeroClick = () => {
    setCounter(0);
  }

  const handleMinusClick = () => {
    setCounter(counter - 1);
  }

  console.log('rendering...', counter);

  return (
    <div>
      
      <Display counter={counter} />
      <button onClick={handlePlusClick}>plus</button>
      <button onClick={handleMinusClick}>minus</button>
      <button onClick={handleZeroClick}>zero</button>
    </div>

  )
}

export default App;