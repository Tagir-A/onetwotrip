import React from 'react'
import FlightCard from './flightCard'

function FlightCardList({ flights }) {
    return (
        <ul className="flight-card-list">
            {flights.map(item =>
                <FlightCard
                    key={item.id}
                    flight={item}
                />
            )}
        </ul>
    )
}

export default FlightCardList