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
      const {monsters, searchField} = this.state;
      const filteredMonsters = monsters.filter(monster => {
          return monster.name.toLowerCase().includes(searchField.toLowerCase())
      });
      const handleChange = (e)=> this.setState({searchField: e.target.value})

    return (
        <div className="App">
            <h1>Rolodex</h1>
            <SearchBox
                monsters={monsters}
                placeholder='Find Monster'
                handleChange={handleChange}
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

export default App;
