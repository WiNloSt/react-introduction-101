import React, { Component } from 'react'
import Editor from './components/Editor'
import Console from './components/Console'

import style from './style.scss'

class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <Editor style={{
          display: 'inline-block',
          width: '50%',
          verticalAlign: 'top'
        }} />
        <Console style={{
          display: 'inline-block',
          width: '50%',
          verticalAlign: 'top'
        }} />
      </div>
    )
  }
}

export default App
