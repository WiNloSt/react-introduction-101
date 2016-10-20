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
