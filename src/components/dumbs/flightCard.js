import React from 'react'

function FlightCard({ flight }) {
    return (
        <li>
            <p className="from">{flight.direction.from}</p>
            <p className="to">{flight.direction.to}</p>
            <p className="departure">{flight.departure}</p>
            <p className="arrival">{flight.arrival}</p>
            <p className="carrier">{flight.carrier}</p>
        </li>
    )
}

export default FlightCard