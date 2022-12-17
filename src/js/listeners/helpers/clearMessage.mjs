/**
 * clear error message after close model
 * @param {message} clear error message
 */

export function hideErrorMessage(arg) {
  if (arg) {
    arg.innerHTML = '';
  }
}
