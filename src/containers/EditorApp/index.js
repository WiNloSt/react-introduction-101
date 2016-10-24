import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import EditorAppPresentation from '../../components/EditorApp'

class EditorApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <EditorAppPresentation />
      </Provider>
    )
  }
}

export default EditorApp
