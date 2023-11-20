import React, { useState } from 'react';
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
      <div>{counter}</div>
      <button onClick={handlePlusClick}>plus</button>
      <button onClick={handleMinusClick}>minus</button>
      <button onClick={handleZeroClick}>zero</button>
    </div>

  )
}

export default App;