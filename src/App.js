import  React , {Component} from 'react'
import './App.css';
import {CardList} from "./components/CardList/card-list.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        monsters:[],
        searchField:''
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
            <input
                type='search'
                placeholder='Find Monster'
                onChange={e=> this.setState({searchField: e.target.value})}
            />
            <CardList monsters={this.state.monsters} />
        </div>
    );
  }
}

export default App;
