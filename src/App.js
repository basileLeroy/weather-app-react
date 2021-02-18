import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import NavBar from './NavBar';

import Weekdays from './Weekdays';


function App() {
  return (
    <>
        <header>
        <h1>Weather4U</h1>
        </header>

        <div className="weatherContainer">
          <NavBar />

          <SearchBar />

          <Weekdays />
        </div>
    </>
  )
}

export default App;
