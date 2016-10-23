import React from 'react'
import { connect } from 'react-redux'
import AcceptStyleAndClassName from '../../containers/AcceptStyleAndClassName'
import { clearConsole, runCode, toggleAutorun } from '../../actions'
import style from './style.scss'

const Console = ({ consoleOutput, isAutorun, clearConsole, runCode, toggleAutorun }) => (
  <div className={style.console}>
    <header className={style.header}>
      <h1 className={style.headerName}>Console</h1>
      <div className={style.consoleControl}>
        <label className={style.autorun} htmlFor='autorun-cb'>
          <span className={style.autorunLabel}>Autorun</span>
          <input
            id='autorun-cb'
            type='checkbox'
            className={style.autorunCheckbox}
            checked={isAutorun}
            onChange={toggleAutorun} />
        </label>
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
    consoleOutput: state.consoleOutput,
    isAutorun: state.isAutorun
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearConsole: () => dispatch(clearConsole()),
    runCode: () => dispatch(runCode()),
    toggleAutorun: () => dispatch(toggleAutorun())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptStyleAndClassName(Console))
