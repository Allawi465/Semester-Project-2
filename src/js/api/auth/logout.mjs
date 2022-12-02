import * as localStorage from '../../storage/index.mjs';

/**
 * Checking Auth from localStorage
 * @param {loadTheValue} localStorage get value
 * @param {authValidation} if user true or false validation
 * @param {removeFromStorage} localStorage remove value
 */

export function logout() {
  localStorage.remove('profile');
  localStorage.remove('token');
  location.reload();
  location.href = '/NOxB/home/';
}
