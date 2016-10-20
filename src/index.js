import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import 'normalize.css'
import './global.scss'
import configureProxyConsoleLog from './configureProxyConsoleLog'

import reducer from './reducers'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
configureProxyConsoleLog(store)

const enhancedApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  enhancedApp,
  document.getElementById('root')
)
