import worker from './webWorker'
import { appendConsoleOutput } from './actions'
import stringify from './lib/stringify'

window.stringify = stringify

function configureWorker(store) {
  worker.onmessage = message => {
    let { data } = message
    data = data.map(arg => {
      if (typeof arg === 'undefined') {
        return 'undefined'
      }

      return stringify(arg)
    })
    store.dispatch(appendConsoleOutput(data))
  }
}

export default configureWorker
