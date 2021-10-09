import  React , {Component} from 'react'
import './App.css';
import {CardList} from "./components/CardList/card-list.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        monsters:[]
      }
  }

  componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(response=> response.json()).then(data=>{
         console.log(data);
         this.setState({
            monsters: data
         })
       })
  }

  render(){
    return (
        <div className="App">
            <CardList monsters={this.state.monsters}>

            </CardList>

        </div>
    );
  }
}

export default App;
