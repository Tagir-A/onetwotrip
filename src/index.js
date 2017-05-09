import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import widget from './reducers/reducer.js'
import App from './components/app'

let store = createStore(widget)
const app = document.getElementById("app")
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, app
)
