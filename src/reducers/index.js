import {
  UPDATE_CODE,
  APPEND_CONSOLE_OUTPUT
} from '../actions'

const initialState = {
  code:
`// edit your code here
console.log('hello world')
`,
  consoleOutput: ['// initial value from store']
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CODE:
      const { code } = action
      runCode(code)
      return {
        ...state,
        code: code
      }
    case APPEND_CONSOLE_OUTPUT:
      return {
        ...state,
        consoleOutput: [...state.consoleOutput, ...action.consoleOutput]
      }
    default:
      return state
  }
}

function runCode(code) {
  eval(code) // eslint-disable-line
}

export default reducer
