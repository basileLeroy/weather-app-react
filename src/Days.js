import React from 'react'

export default function Days() {

    return (
        <div className="day day01">
            <section className="DateLocation">
                <div className="weekday realtime01">
                    Mon
                </div>
                <div className="date date01">
                    31 December 2020
                </div>
            </section>

            <div className="current">
                <div className="temperature temp01">--<span>°c</span></div>
                <div className="weatherStatus  status01"></div>
            </div>
        </div>
    )
}