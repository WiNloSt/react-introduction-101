import {
  UPDATE_CODE,
  runCode
} from './actions'

const epic = (action$, store) =>
  action$.ofType(UPDATE_CODE)
    .filter(() => store.getState().isAutorun)
    .debounceTime(1500)
    .mapTo(runCode())

export default epic
