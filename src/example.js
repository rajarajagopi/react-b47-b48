//Parent class
class Component {
    render (){
        console.log('render from component');
    }
}

let component = new Component();// creating object
//component.render();// fuction calling

// child class
class App extends Component{
    // Method over riding
    render(){
        console.log('Method Over ride');
    }
}

let app = new App();
//app.render();