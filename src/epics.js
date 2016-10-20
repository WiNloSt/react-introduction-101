import {
  UPDATE_CODE,
  runCode
} from './actions'

const epic = action$ =>
  action$.ofType(UPDATE_CODE)
    .debounceTime(1500)
    .mapTo(runCode())

export default epic
