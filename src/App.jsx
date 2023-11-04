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
<h1 style={{color:'redgit',background:'yellow'}}>Greetings</h1>
<h1 style={appHeaderstyle}>Style settings through Passing object</h1>
<Hello name='Gopi' age ='33'/>
<Hello />
<Hello />

  </div>
)
}
export default App;