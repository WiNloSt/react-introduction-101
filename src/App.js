import React, { Component } from 'react'
import Editor from './components/Editor/index.js'
import style from './style.scss'

class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <Editor />
      </div>
    )
  }
}

export default App
