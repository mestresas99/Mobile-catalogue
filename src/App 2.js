import React, {Component} from 'react'
import mobiles from './components/phones.js';
import './App.css'

class App extends Component {
  render(){
    return (
      <mobiles mobiles={this.state.mobiles}/>
    )
  }
  
  state = {
    mobiles: []
  };
  componentDidMount(){
    fetch('http://localhost:8080/mobiles')
    .then(res => res.json())
    .then((data) =>{
        this.setState({ mobiles: data})
    })
    .catch(console.log)
  }
}

export default App;
