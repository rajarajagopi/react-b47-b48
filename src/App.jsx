import React, { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(0);

  
  console.log('rendering...', counter);
  const handleClick = () => {
    // console.log('button clicked');
    setCounter(counter + 1);
  }

  return (
 
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>plus</button>
    </div>

  )
}


export default App;