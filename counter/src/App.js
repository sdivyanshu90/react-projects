import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => console.log(count));
  return (
    <div>
      <h1>This is current count: {count}</h1>
      <button onClick={ () => setCount(count+1)}>
        Increment
      </button>
      
      <button onClick={ () => setCount(count-1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
