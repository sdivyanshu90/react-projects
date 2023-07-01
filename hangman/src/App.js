import React from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';

function App() {
  return (
    < >
      <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />
      </div> 
    </>
  );
}

export default App;
