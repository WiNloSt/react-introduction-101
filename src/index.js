import 'rxjs' // required to use with redux-observable
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css'
import './global.scss'

const rootElement = document.getElementById('root')
const enhancedApp = (
  <AppContainer>
    <App />
  </AppContainer>
)

ReactDOM.render(
  enhancedApp,
  rootElement
)

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App').default
    const enhancedApp = (
      <AppContainer>
        <NextApp />
      </AppContainer>
    )
    ReactDOM.render(
    enhancedApp,
      rootElement
    )
  })
}
