import worker from './webWorker'
import { appendConsoleOutput } from './actions'

function configureWorker(store) {
  worker.onmessage = message => {
    let { data } = message
    store.dispatch(appendConsoleOutput(data))
  }
}

export default configureWorker
