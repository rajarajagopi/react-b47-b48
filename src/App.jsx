import { Component } from "react";
//stateful component
class App extends Component {
  constructor(props){
    super(props);// to call the parent class constructor

    //define the state
    this.state ={
      count:0,
    }
  }

  increament = () =>{
    //update the state (data) of the count
    this.setState({
      count:this.state.count+1,
     })
  }
  render(){
return(
<div>
  <p>Count:{this.state.count}</p>
  <button onClick={this.increament}>Increament</button>
</div>
)
  }
}
export default App;