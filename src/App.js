import React, { Component } from 'react'
import Editor from './components/Editor'
import Console from './components/Console'

import style from './style.scss'

class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <Editor style={{ flex: 2 }}/>
        <Console style={{ flex: 1 }}/>
      </div>
    )
  }
}

export default App
