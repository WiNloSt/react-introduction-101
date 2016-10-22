import worker from './webWorker'
import { appendConsoleOutput } from './actions'

function configureWorker(store) {
  worker.onmessage = message => {
    const { data } = message
    store.dispatch(appendConsoleOutput(data))
  }
}

export default configureWorker
