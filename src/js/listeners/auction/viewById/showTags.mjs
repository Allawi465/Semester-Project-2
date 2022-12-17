/**
 * show tags from listing
 * @param {tag} forEach from listing
 */

export function showTag(arg) {
  arg.forEach((tag) => {
    if (tag.length >= 1) {
      const tagsContainer = document.querySelector('.tags-container');

      const tagItem = document.createElement('p');

      tagItem.classList.add('badge', 'bg-light', 'tags', 'ms-2', 'text-black');

      tagItem.innerHTML = tag;

      tagsContainer.append(tagItem);
    }
  });

  if (arg.length === 0) {
    const tags = document.querySelector('.tags');
    tags.remove();
  }
}
