import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import style from './style.scss'
import AcceptStyleAndClassName from '../../containers/AcceptStyleAndClassName'
import * as actions from '../../actions'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

class Console extends React.Component {
  componentDidMount() {
    this.props.updateCode(this.props.code)
  }

  render() {
    const aceCommands = [{
      name: 'Run code',
      bindKey: { win: 'Ctrl-enter', mac: 'Command-enter' },
      exec: this.props.runCode,
    }]
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
          onChange={this.props.updateCode}
          commands={aceCommands}
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
  const bindedActions = bindActionCreators(actions, dispatch)
  return {
    ...bindedActions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptStyleAndClassName(Console))
