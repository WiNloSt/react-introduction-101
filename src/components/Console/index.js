import React from 'react'
import { connect } from 'react-redux'
import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { darkula } from 'react-syntax-highlighter/dist/styles'
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
            <li key={index} className={style.outputItem}>
              <ReactSyntaxHighlighter
                style={darkula}
                customStyle={{
                  margin: '0.5em',
                  background: 'none'
                }}>
                {outputLine}
              </ReactSyntaxHighlighter>
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
    clearConsole: () => dispatch(clearConsole())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptStyleAndClassName(Console))
