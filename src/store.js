import configureStore from './configureStore.js'
import configureWorker from './handleWorker'

const store = configureStore()
configureWorker(store)

export default store
