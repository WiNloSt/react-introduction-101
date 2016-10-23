import React from 'react'
import { connect } from 'react-redux'
import AcceptStyleAndClassName from '../../containers/AcceptStyleAndClassName'
import { clearConsole, runCode } from '../../actions'
import style from './style.scss'

const Console = ({ consoleOutput, clearConsole, runCode }) => (
  <div className={style.console}>
    <header className={style.header}>
      <h1 className={style.headerName}>Console</h1>
      <div className={style.consoleControl}>
        <button className={style.button} onClick={runCode}>Run</button>
        <button className={style.button} onClick={clearConsole}>Clear log</button>
      </div>
    </header>
    <ul className={style.outputList}>
      {
        consoleOutput.map(
          (outputLine, index) => (
            <li key={index} className={style.outputItem}>
              <pre style={{margin: '0.5em 0'}}>
                {outputLine}
              </pre>
            </li>
          )
        )
      }
    </ul>
  </div>
)

function mapStateToProps(state) {
  return {
    consoleOutput: state.consoleOutput
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearConsole: () => dispatch(clearConsole()),
    runCode: () => dispatch(runCode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptStyleAndClassName(Console))
