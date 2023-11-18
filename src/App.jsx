//function component
/*import React from 'react';// no need this line from react17 ver..

function App() {
  return (
    <div>
      hello world
    </div>
  )
}

export default App*/
//-----------------------------------
//------- This is Class component--------------------------------
/*import { Component } from "react";
class App extends Component {
render(){
  return(
    <div> Hello world...! </div>

  )
}
}

*/

//--------------Passing props in function component--------------
/*import React from 'react'
function Hello({name})
{
  return(<div>Hello {name}</div>)
  
}

function App() {
  return (
    <div>
      <Hello name="Gopi"/>
    </div>
  )
}
*/
//Creating class component
import { Component } from "react";
class Hello extends Component{
  render()
  {
    return <div>Hello guest...!</div>
  }
}
class App extends Component{
  render()
  {
    return (
    <div><Hello /></div>
    )
  }
}
export default App
