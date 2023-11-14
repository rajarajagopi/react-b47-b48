/*import './App.css';
const Hello =(props)=>{
  return (
    <div>
      <p> Hello {props.name}, Your age is {props.age}</p>
    </div>
  )
}
const App = () => {
  const now = new Date();
  const a=10; 
  const b=20;
  const appHeaderstyle={
    color:'white',background:'red'
  };

return (
  <div>
  <p> Hello world it's a {now.toString()}</p>
<p> 
  {a}plus{b} is {a+b}
</p>
<h1 style={{color:'red',background:'yellow'}}>Greetings</h1>
<h1 style={appHeaderstyle}>Style settings through Passing object</h1>
<h2>style change with css file</h2>
<Hello name='Gopi' age ='33'/>
<Hello />
<Hello />

  </div>
)
}
export default App;*/

//------------------day22----------day3-----------------React rfce
/*import React from "react";
function App(props) {
  console.log(props.notes);
  const {notes} = props; // destructuring data
  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {
        notes.map((note) => {
        return<li key={note.id}>{note.content}</li>
        })
      }
        
      </ul>
    </div>
  )
}*/
//-----------------create a each note with component
import React from "react";
import Note from './Component/Note';

function App(props) {
  console.log(props.notes);
  const {notes} = props; // destructuring data
  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {
        notes.map((note) => {
        return <Note key={note.id} note={ note }/>
        })
      }
        
      </ul>
    </div>
  )
}
export default App;
