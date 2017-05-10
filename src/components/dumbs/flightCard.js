import React from 'react'

function FlightCard({ flight }) {
    let departure = new Date(flight.departure)
    let arrival = new Date(flight.arrival)
    let optionsDate = {day: "numeric", month: "long", year: "numeric", weekday: "short"}
    let optionsTime = {hour: "numeric", minute: "numeric"}
    return (
        <li className="flight-card">
            <div className="carrier">
                <p className="carrier-txt">{flight.carrier}</p>
            </div>
            <div className="details">
                <div className="from">
                    <p className="departure time">{departure.toLocaleString("ru-RU", optionsTime)}</p>
                    <p className="from-txt">{flight.direction.from}</p>
                    <p className="departure">{departure.toLocaleString("ru-RU", optionsDate)}</p>
                </div>
                <div className="to">
                    <p className="arrival time">{arrival.toLocaleString("ru-RU", optionsTime)}</p>
                    <p className="to-txt">{flight.direction.to}</p>
                    <p className="arrival">{arrival.toLocaleString("ru-RU", optionsDate)}</p>
                </div>

            </div>

        </li>
    )
}

export default FlightCard