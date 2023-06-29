import React, {useState} from 'react';
import './App.css';

function App() {
  const api = {
    key: "b7371fa5ba2cc140119ea1371c1d5b9f",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(response => response.json())
        .then(result => {
          setWeather(result)
          setQuery('')
          console.log(result)
          console.log(weather)
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let hours = d.getHours();
    let hourString = hours.toString().padStart(2, '0');

    // return `${day} ${date} ${month} ${year}] ${hours.toString().padStart(2, '0')}:00`;

    return (
      <div>
        {day} {date} {month} {year}
        <br />
        {hourString}:00
      </div>
    );

  }

  return (
    <div className={(typeof weather.main != "undefined") 
      ? ((weather.main.temp > 22) 
        ? 'app warm' : 'app') 
          : 'app'}>
      <main>
        <div className="search-box">
          <input 
            className="search-bar"
            placeholder="Search here..."
            onChange={event => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
              <div className='location-box'>
                <div className='location'>{weather.name}, {weather.sys.country}</div>
                <div className='date'>{dateBuilder(new Date())}</div>
              </div>
              <div className='weather-box'>
                <div className='temp'>
                  {Math.round(weather.main.temp)}°C
              </div>
              <div className='weather'>
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ): ('')}
        
      </main>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// const api = {
//   key: "b7371fa5ba2cc140119ea1371c1d5b9f",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// function App() {
//   const [query, setQuery] = useState('');
//   const [weather, setWeather] = useState({});

//   const search = evt => {
//     if (evt.key === "Enter") {
//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then(res => res.json())
//         .then(result => {
//           setWeather(result);
//           setQuery('');
//           console.log(result);
//         });
//     }
//   }

//   const dateBuilder = (d) => {
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`
//   }

//   return (
//     <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
//       <main>
//         <div className="search-box">
//           <input 
//             type="text"
//             className="search-bar"
//             placeholder="Search..."
//             onChange={e => setQuery(e.target.value)}
//             value={query}
//             onKeyPress={search}
//           />
//         </div>
//         {(typeof weather.main != "undefined") ? (
//         <div>
//           <div className="location-box">
//             <div className="location">{weather.name}, {weather.sys.country}</div>
//             <div className="date">{dateBuilder(new Date())}</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">
//               {Math.round(weather.main.temp)}°c
//             </div>
//             <div className="weather">{weather.weather[0].main}</div>
//           </div>
//         </div>
//         ) : ('')}
//       </main>
//     </div>
//   );
// }

// export default App;