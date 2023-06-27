import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = { advice : '' };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip

        this.setState({ advice })
      })

      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { advice } = this.state;    

    return(
      <div className='App'>
        <div className='Card'>
          <h1 className='h1'> { advice } </h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span> Give more advice!!</span>
          </button>
        </div>
      </div>
      
    )
  }
}


export default App;
