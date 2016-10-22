import React from 'react'
import { connect } from 'react-redux'
import AcceptStyleAndClassName from '../../containers/AcceptStyleAndClassName'
import { clearConsole } from '../../actions'
import style from './style.scss'

const Console = ({ consoleOutput, clearConsole }) => (
  <div className={style.console}>
    <header className={style.header}>
      <h1 className={style.headerName}>Console</h1>
      <button className={style.clearLogButton} onClick={clearConsole}>Clear log</button>
    </header>
    <ul className={style.outputList}>
      {
        consoleOutput.map(
          (outputLine, index) => (
            <li key={index} className={style.outputItem}>{outputLine}</li>
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
    clearConsole: () => dispatch(clearConsole())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptStyleAndClassName(Console))
