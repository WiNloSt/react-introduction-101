import 'rxjs' // required to use with redux-observable
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import 'normalize.css'
import './global.scss'
import configureStore from './configureStore.js'
import configureWorker from './handleWorker'

const store = configureStore()
configureWorker(store)

const enhancedApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  enhancedApp,
  document.getElementById('root')
)
