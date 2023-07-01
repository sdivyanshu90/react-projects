import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';



const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];


function App() {

  const [playable, setPlayable] = useState(true);
  const [ correctLetters, setCorrectLetters] = useState([]);
  const [ wrongLetters, setWrongLetters] = useState([]);

  return (
    < >
      <Header />
      <div className='game-container'>
        <Figure />
        <WrongLetters />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div> 
    </>
  );
}

export default App;
