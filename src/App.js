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
          height: '100%',
          verticalAlign: 'top'
        }}/>
        <div style={{
          display: 'inline-block',
          width: '50%',
          height: '100%',
          verticalAlign: 'top'
        }}>
          <Console />
        </div>
      </div>
    )
  }
}

export default App
