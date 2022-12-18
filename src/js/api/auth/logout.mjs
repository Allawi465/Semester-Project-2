import * as localStorage from '../../storage/index.mjs';

/**
 * clear localStorage when user log out
 * @param {remove} localStorage remove value
 */

export function logout() {
  localStorage.remove('profile');
  localStorage.remove('token');
  localStorage.remove('credits');
  location.reload();
  location.href = '/index.html';
}
