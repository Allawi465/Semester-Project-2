import { message } from '../../api/auth/login.mjs';
import { messageRegister } from '../../api/auth/register.mjs';
import { messageForBid } from '../../api/auction/bid.mjs';
import { errorMessage } from '../../api/auction/addItem.mjs';
import { deleteErrorMessage } from '../../api/auction/delete.mjs';
import { errorUpdateMessage } from '../../api/auction/update.mjs';
import { errorMessageSettings } from '../../api/settings/index.mjs';

/**
 * clear error message after close model
 * @param {message} clear error message
 */

export function hideErrorLogin() {
  if (message) {
    message.innerHTML = '';
  }
}

/**
 * clear error message after close model
 * @param {messageRegister} clear error message
 */

export function hideErrorRegister() {
  if (messageRegister) {
    messageRegister.innerHTML = '';
  }
}

/**
 * clear error message after close model
 * @param {messageForBid} clear error message
 */

export function hideErrorBid() {
  if (messageForBid) {
    messageForBid.innerHTML = '';
  }
}

/**
 * clear error message after close model
 * @param {errorMessage} clear error message
 */

export function hideErrorAddItem() {
  if (errorMessage) {
    errorMessage.innerHTML = '';
  }
}

/**
 * clear error message after close model
 * @param {deleteErrorMessage} clear error message
 */

export function hideErrorDelete() {
  if (deleteErrorMessage) {
    deleteErrorMessage.innerHTML = '';
  }
}

/**
 * clear error message after close model
 * @param {errorUpdateMessage} clear error message
 */

export function hideErrorUpdate() {
  if (errorUpdateMessage) {
    errorUpdateMessage.innerHTML = '';
  }
}

/**
 * clear error message after close model
 * @param {errorMessageSettings} clear error message
 */

export function hideErrorSettings() {
  if (errorMessageSettings) {
    errorMessageSettings.innerHTML = '';
  }
}
