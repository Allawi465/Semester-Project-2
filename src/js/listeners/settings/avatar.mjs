import { settingAvatar } from '../../api/settings/index.mjs';

/**
 * form to login
 * @param {profile} form to login
 * @param {login} sending the form to api call
 */

export function changeAvatar() {
  const form = document.getElementById('settings');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const avatar = Object.fromEntries(formData.entries());
      settingAvatar(avatar);
      form.reset();
    });
  }
}
