import { appendConsoleOutput } from './actions'

function configureProxyConsoleLog(store) {
  const originalConsoleLog = window.console.log.bind(window.console)

  window.console.log = function(...rest) {
    originalConsoleLog(...rest)
    setTimeout(() => store.dispatch(appendConsoleOutput(rest)))
  }
}

export default configureProxyConsoleLog
