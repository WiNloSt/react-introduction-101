import React from 'react'
import { connect } from 'react-redux'
import style from './style.scss'
import AcceptStyleAndClassName from '../../containers/AcceptStyleAndClassName'
import { updateCode } from '../../actions'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

class Console extends React.Component {
  updateCode = (code) => {
    this.props.updateCode(code)
  }

  componentDidMount() {
    this.updateCode(this.props.code)
  }

  render() {
    return (
      <div className={style.container}>
        <AceEditor
          mode="javascript"
          theme="monokai"
          editorProps={{$blockScrolling: 'Infinity'}}
          className={style.editor}
          focus={true}
          style={{
            height: false,
            width: false,
            fontSize: '1.5em'
          }}
          value={this.props.code}
          onChange={this.updateCode}
        />
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
