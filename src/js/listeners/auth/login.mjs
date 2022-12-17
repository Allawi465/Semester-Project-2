import { login } from '../../api/auth/login.mjs';

/**
 * form to login
 * @param {profile} form to login
 * @param {login} sending the form to api call
 */

export function loginUsers() {
  const form = document.getElementById('loginForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      login(profile);
      form.reset();
    });
  }
}
