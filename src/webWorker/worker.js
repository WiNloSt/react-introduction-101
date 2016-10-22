import stringify from '../lib/stringify'

onmessage = message => { // eslint-disable-line
  const code = message.data
  try {
    eval(code) // eslint-disable-line
  } catch (error) {
    console.error(error)
  }
}

(function configureProxyConsoleLog() {
  const originalConsoleLog = console.log.bind(console)

  console.log = function(...rest) {
    const args = rest.map(arg => {
      if (typeof arg === 'undefined') {
        return 'undefined'
      }

      return stringify(arg)
    })
    postMessage(args)
    originalConsoleLog(...rest)
  }
}())
