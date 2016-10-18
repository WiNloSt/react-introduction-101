import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import 'normalize.css'
import './global.scss'

import reducer from './reducers'

const store = createStore(reducer)
const enhancedApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  enhancedApp,
  document.getElementById('root')
)
