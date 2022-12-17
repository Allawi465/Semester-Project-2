import { settingAvatar } from '../../api/settings/index.mjs';

/**
 * change avatar with put method by name
 * @param {avatar} update avatar by name
 * @param {fetchWToken} token from a function
 * @param {settings} form data to update the avatar
 * @param {formData} making new form to update the post by id
 */

export function changeAvatar() {
  const form = document.getElementById('setting');
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
