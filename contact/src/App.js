import React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './ContactCard';

function App() {
  // const contacts = [
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name : "Chris",
  //     Email : "chris@example.com",
  //     Age : 27,
  //   },
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name : "John",
  //     Email : "john@england.com",
  //     Age : 39, 
  //   },
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name : "John",
  //     Email : "john@england.com",
  //     Age : 50,
  //   }
  // ]

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setResults(data.results)
    });
  }, [])

  

  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard 
            key = {index}
            avatarUrl = {result.picture.large}
            name = {result.name.first}
            Email = {result.email}
            number = {result.cell}
            Age = {result.dob.age}
            dob = {result.dob.date}
          />
        )
      })}
      
    </div>
  );
}

export default App;
