import {
  UPDATE_CODE
} from '../actions'

const initialState = {
  code:
`// edit your code here
console.log('hello world')
`
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
    default:
      return state
  }
}

function runCode(code) {
  eval(code) // eslint-disable-line
}

export default reducer
