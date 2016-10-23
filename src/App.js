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
    if (percentage < 10 || percentage > 90) return
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
          verticalAlign: 'top'
        }} />
        <Resizer left={`${this.state.resizerPositionPercentage}%`} setResizerPosition={this.setResizerPosition} />
        <Console style={{
          display: 'inline-block',
          width: `${100 - this.state.resizerPositionPercentage}%`,
          verticalAlign: 'top'
        }} />
      </div>
    )
  }
}

export default App
