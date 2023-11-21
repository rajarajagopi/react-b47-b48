import React, { useState } from 'react';
function Display({counter}) {
  return (
    <div>{counter}</div>
  )
}

function Button({text, handleClick}) {
  return (
    <button onClick={handleClick}>{ text }</button>
  )
}

function App() {
  const [counter, setCounter] = useState(0);
  const handlePlusClick = () => {
    // console.log('button clicked');
    setCounter(counter + 1);
  }
  const handleMinusClick = () => {
    setCounter(counter - 1);
  }
  const handleZeroClick = () => {
    setCounter(0);
  }
  
  return (
    <div>
      <Display counter={counter} />
      <Button text='plus' handleClick={ handlePlusClick } />
      <Button text='minus' handleClick={ handleMinusClick } />
      <Button text='zero' handleClick={ handleZeroClick } />
    </div>
  )
}
export default App;