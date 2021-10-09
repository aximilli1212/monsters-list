import  React , {Component} from 'react'
import './App.css';

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
          {
            this.state.monsters.map(monster=>{
              return <h1 key={monster.id} className='ashrin'>{monster.name}</h1>
            })
          }
        </div>
    );
  }
}

export default App;
