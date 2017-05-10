import React from 'react'

function FlightCard({ flight }) {
    let departure = new Date(flight.departure).toLocaleString("ru-RU")
    let arrival = new Date(flight.arrival).toLocaleString("ru-RU")
    return (
        <li>
            <p className="from">{flight.direction.from}</p>
            <p className="to">{flight.direction.to}</p>
            <p className="departure">{departure}</p>
            <p className="arrival">{arrival}</p>
            <p className="carrier">{flight.carrier}</p>
        </li>
    )
}

export default FlightCard