import React from 'react'
import FlightCard from './flightCard'

function FlightCardList({ flights }) {
    return (
        <ul>
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