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
    postMessage(rest)
    originalConsoleLog(...rest)
  }
}())
