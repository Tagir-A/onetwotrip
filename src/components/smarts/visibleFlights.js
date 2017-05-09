import { connect } from 'react-redux'
import FlightCardList from '../dumbs/flightCardList'

function getVisibleFlights(flights, filter) {
    if (filter == "SHOW_ALL") return flights
    else return flights.filter(item => {
        return item.carrier == filter
    })
}

function mapStateToProps(state) {
    return {
        flights: getVisibleFlights(state.flights, state.filter)
    }
}

const VisibleFlights = connect(mapStateToProps)(FlightCardList)

export default VisibleFlights