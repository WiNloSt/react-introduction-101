import 'rxjs' // required to use with redux-observable
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import 'normalize.css'
import './global.scss'
import configureProxyConsoleLog from './configureProxyConsoleLog'
import configureStore from './configureStore.js'

const store = configureStore()
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
