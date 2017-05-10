import React from 'react'
import VisibleFlights from './smarts/visibleFlights'
import FilterList from './smarts/filterList'

class App extends React.Component {
    render() {
        return (
            <div>
                <FilterList />
                <VisibleFlights />
            </div>
        )
    }
}

export default App