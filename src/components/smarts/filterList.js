import { connect } from 'react-redux'
import Selector from '../dumbs/selector'
import { setFilter } from '../../actions/actions'

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
function mapDispatchToProps (dispatch) {
    return {
        onChange: () => {
            let filter = document.getElementById("selector").value
            dispatch(setFilter(filter))
        }
    }
}

const FilterList = connect(mapStateToProps, mapDispatchToProps)(Selector)

export default FilterList