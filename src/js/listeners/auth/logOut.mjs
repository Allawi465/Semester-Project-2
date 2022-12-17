import { logout } from '../../api/auth/logout.mjs';

/**
 * making class Auth into a new function
 * @param {signOutBtn} signOut button using class auth.signOut() function
 * @param {auth} activating the class Auth with new auth
 */

export function logOut() {
  const signOutBtn = document.querySelector('.signOut');
  signOutBtn.addEventListener('click', () => logout());
}
