export const UPDATE_CODE = 'UPDATE_CODE'
export function updateCode(code) {
  return {
    type: UPDATE_CODE,
    code
  }
}

export const APPEND_CONSOLE_OUTPUT = 'APPEND_CONSOLE_OUTPUT'
export function appendConsoleOutput(consoleOutput) {
  return {
    type: APPEND_CONSOLE_OUTPUT,
    consoleOutput
  }
}

export const RUN_CODE = 'RUN_CODE'
export function runCode() {
  return {
    type: RUN_CODE
  }
}

export const CLEAR_CONSOLE = 'CLEAR_CONSOLE'
export function clearConsole() {
  return {
    type: CLEAR_CONSOLE
  }
}

export const TOGGLE_AUTORUN = 'TOGGLE_AUTORUN'
export function toggleAutorun() {
  return {
    type: TOGGLE_AUTORUN
  }
}
