import React from 'react'
import VisibleFlights from './smarts/visibleFlights'
import FilterList from './smarts/filterList'

class App extends React.Component {
    render() {
        return (
            <div className="widget">
                <div className="selector-container styled-select">
                    <FilterList />
                </div>
                <div className="card-list-container">
                    <VisibleFlights />
                </div>
            </div>
        )
    }
}

export default App