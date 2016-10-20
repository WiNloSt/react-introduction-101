import React from 'react'
import { connect } from 'react-redux'
import style from './style.scss'
import AcceptStyleAndClassName from '../../containers/AcceptStyleAndClassName'

const Console = ({ consoleOutput }) => (
  <div className={style.console}>
    <ul>
      {
        consoleOutput.map(
          (outputLine, index) => (
            <li key={index}>{outputLine}</li>
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

export default connect(mapStateToProps)(AcceptStyleAndClassName(Console))
