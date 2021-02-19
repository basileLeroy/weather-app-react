import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

import Weekdays from './Weekdays';

const CITY_KEY = 'cityApp.city';

function App() {

  const [city, setCity] = useState([
    { cityName: 'A city..' },
  ]);

  useEffect(() => {
    const storedCity = JSON.parse(localStorage.getItem(CITY_KEY))
    if (storedCity) setCity(storedCity)
  }, [])

  useEffect(() => {
    localStorage.setItem(CITY_KEY, JSON.stringify(city))
  }, [city])

  const addCity = (cityName) =>(
    setCity([...city, {cityName}])
  );

  return (
    <>
        <header>
        <h1>Weather4U</h1>
        </header>

        <div className="weatherContainer">
          <NavBar />

          <SearchBar addCity={addCity} />

          <Weekdays />
        </div>
    </>
  )
}

export default App;
