import 'rxjs' // required to use with redux-observable
import { AppContainer } from 'react-hot-loader'
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

const rootElement = document.getElementById('root')
const enhancedApp = (
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
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
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>
    )
    ReactDOM.render(
    enhancedApp,
      rootElement
    )
  })
}
