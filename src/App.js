import React from 'react'
import { BrowserRouter, Match } from 'react-router'
import SlideApp from './components/SlideApp'
import EditorApp from './containers/EditorApp'

const App = () => (
  <BrowserRouter>
    <div style={{
      width: '100%',
      height: '100%'
    }}>
      <Match exactly pattern='/' component={SlideApp} />
      <Match pattern='/editor' component={EditorApp} />
    </div>
  </BrowserRouter>
)

export default App
