import React, { Component } from 'react'
import Editor from './components/Editor/index.js'

class App extends Component {
  render() {
    return (
      <div style={{
        height: '100%'
      }}>
        <Editor />
      </div>
    )
  }
}

export default App
