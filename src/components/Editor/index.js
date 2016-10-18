import React from 'react'
import { connect } from 'react-redux'
import style from './style.scss'
import AcceptStyleAndClassName from '../../containers/AcceptStyleAndClassName'
import { updateCode } from '../../actions'

class Console extends React.Component {
  updateCode = (e) => {
    const code = e.target.value
    this.props.updateCode(code)
  }

  render() {
    return (
      <div className={style.container}>
        <textarea
          onChange={this.updateCode}
          className={style.editor}
          value={this.props.code} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    code: state.code
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCode: (code) => dispatch(updateCode(code))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptStyleAndClassName(Console))
