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

return (
  <div>
  <p> Hello world it's a {now.toString()}</p>
<p> 
  {a}plus{b} is {a+b}
</p>
<h1 style={{color:'red',background:'yellow'}}>Greetings</h1>
<Hello name='Gopi' age ='33'/>
<Hello />
<Hello />

  </div>
)
}
export default App;