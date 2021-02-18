import React, {useState, useRef} from 'react'

export default function SearchBar() {

    const [cityName, setCity] = useState([]);

    function handleKeyPress (e) {
        if (e.keyCode == 13) {
        console.log('hey')   
        
        } 
    }


    return (
    <>
    <div className="searchBar">
        <div className="cityForm" id="location">
            <input className="searchBox" type="text" id="cityName" ref={cityName} onKeyUp={ handleKeyPress } placeholder="Search for a city..." />
            <div className="location">
                city
            </div>
        </div>
    </div>
    </>
    )
}