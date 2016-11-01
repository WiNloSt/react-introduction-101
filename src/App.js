import React from 'react'
import { BrowserRouter, Match } from 'react-router'
import SlideApp from './components/SlideApp'
import JsEditor from 'js-editor'

const App = () => (
  <BrowserRouter>
    <div style={{
      width: '100%',
      height: '100%'
    }}>
      <Match exactly pattern='/' component={SlideApp} />
      <Match pattern='/editor' component={JsEditor} />
    </div>
  </BrowserRouter>
)

export default App
