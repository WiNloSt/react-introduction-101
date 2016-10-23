import React, { Component } from 'react'
import Editor from './components/Editor'
import Console from './components/Console'
import Resizer from './components/Resizer'

import style from './style.scss'

class App extends Component {
  state = {
    resizerPositionPercentage: 50
  }

  setResizerPosition = (percentage) => {
    const screenWidth = screen.availWidth
    const editorSize = percentage / 100 * screenWidth
    const consoleSize = (100 - percentage) / 100 * screenWidth
    if (editorSize < 398 || consoleSize < 370) return
    this.setState({
      resizerPositionPercentage: percentage
    })
  }

  render() {
    return (
      <div className={style.container}>
        <Editor style={{
          display: 'inline-block',
          width: `${this.state.resizerPositionPercentage}%`,
          minWidth: '398px',
          verticalAlign: 'top'
        }} />
        <Resizer left={`${this.state.resizerPositionPercentage}%`} setResizerPosition={this.setResizerPosition} />
        <Console style={{
          display: 'inline-block',
          width: `${100 - this.state.resizerPositionPercentage}%`,
          minWidth: '370px',
          verticalAlign: 'top'
        }} />
      </div>
    )
  }
}

export default App
