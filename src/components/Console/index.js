import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AcceptStyleAndClassName from '../../containers/AcceptStyleAndClassName'
import * as actions from '../../actions'
import style from './style.scss'

const Console = ({ consoleOutput, isAutorun, clearConsole, runCode, toggleAutorun }) => (
  <div className={style.container}>
    <div className={style.containerFlex}>
      <header className={style.header}>
        <h1 className={style.headerName}>Console</h1>
        <div className={style.consoleControl}>
          <label className={style.autorun} htmlFor='autorun-cb'>
            <span className={style.autorunLabel}>Autorun</span>
            <input id='autorun-cb' type='checkbox' className={style.autorunCheckbox} checked={isAutorun} onChange={toggleAutorun}/>
          </label>
          <button className={style.button} onClick={runCode}>Run</button>
          <button className={style.button} onClick={clearConsole}>Clear log</button>
        </div>
      </header>
      <ul className={style.outputList}>
        {
          consoleOutput.map((outputLine, index) => (
            <li key={index} className={style.outputItem}>
              <pre className={style.preOutput}>{outputLine}</pre>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
)

function mapStateToProps(state) {
  return {
    consoleOutput: state.consoleOutput,
    isAutorun: state.isAutorun
  }
}

function mapDispatchToProps(dispatch) {
  const bindedActions = bindActionCreators(actions, dispatch)
  return {
    ...bindedActions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptStyleAndClassName(Console))
