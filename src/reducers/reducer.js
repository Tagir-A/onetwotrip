import data from '../../data/data.json'

const initialState = {
    filter: "SHOW_ALL",
    flights: data.flights
}

function widget(state = initialState, action) {
    let newState = {}
    switch (action.type) {
        case "SET_FILTER":
            newState = JSON.parse(JSON.stringify(state)) // creating a deep clone of state. Good enough for test task.
            newState.filter = action.filter
            return newState
        default:
            return state
    }
}

export default widget