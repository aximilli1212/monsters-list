import  React , {Component} from 'react'
import './App.css';
import {CardList} from "./components/CardList/card-list.component";
import {SearchBox} from "./components/SearchBox/search-box.component";


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
      const {monsters} = this.state;

    return (
        <div className="App">
            <SearchBox monsters={monsters}  />
            <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

export default App;
