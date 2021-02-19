import React, {useState} from 'react'

export default function SearchBar( { addCity }) {
    const [cityName, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(cityName)
        addCity(cityName)

        setCity('');
    }

    return (
    <>
    <div className="searchBar">
        <div className="cityForm" id="location">
            <form onSubmit={ handleSubmit }>
                <input className="searchBox" type="text" id="cityName" name value={cityName} onChange={(e) => setCity(e.target.value)} placeholder="Search for a city..." />
            </form>
            <div className="location">
                {cityName}
            </div>
        </div>
    </div>
    </>
    )
}