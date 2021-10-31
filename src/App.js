import React, {Component} from 'react'
import Mobile from './components/phones';


class App extends Component {
    render() {
        return (
            <Mobile mobiles={this.state.mobiles} />

        )
    }

    state = {
        mobiles: []
    };

    componentDidMount() {
      fetch('http://localhost:8080/phones')
          .then(res => res.json())
          .then((data) => {
              this.setState({ mobiles: data })
          })
          .catch(console.log)
  }
}

export default App;

