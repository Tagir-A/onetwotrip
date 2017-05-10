import { connect } from 'react-redux'
import Selector from '../dumbs/selector'

function getFilters (flights) {
    let filters = new Set().add("Show all")
    flights.forEach(item => {filters.add(item.carrier)})
    return [...filters]
}

function mapStateToProps (state) {
    return {
        filters: getFilters(state.flights)
    }
}

const FilterList = connect(mapStateToProps)(Selector)

export default FilterList