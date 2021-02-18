import React from 'react'

export default function NavBar() {

    return (
        <nav>
            <div className="navbar" id="navHome">
                <a href="">Home</a>
            </div>
            <div className="navbar" id="navDay">
                <a href="">Today</a>
            </div>
            <div className="navbar" id="navWeek">
                <a href="">This week</a>
            </div>
            <div className="navbar" id="navAlerts">
                <a href="">Alerts</a>
            </div>
        </nav>
    )
}