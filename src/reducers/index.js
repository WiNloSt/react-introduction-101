import {
  UPDATE_CODE,
  APPEND_CONSOLE_OUTPUT,
  RUN_CODE,
  CLEAR_CONSOLE
} from '../actions'
import worker from '../webWorker'

const initialState = {
  code:
`// edit your code here
console.log('hello world')
`,
  consoleOutput: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CODE:
      return {
        ...state,
        code: action.code
      }
    case APPEND_CONSOLE_OUTPUT:
      return {
        ...state,
        consoleOutput: [...state.consoleOutput, ...action.consoleOutput]
      }
    case RUN_CODE:
      runCode(state.code)
      return state
    case CLEAR_CONSOLE:
      return {
        ...state,
        consoleOutput: []
      }
    default:
      return state
  }
}

function runCode(code) {
  worker.postMessage(code)
}

export default reducer
