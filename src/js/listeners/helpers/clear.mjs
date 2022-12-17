/**
 * clear function to HTMLElement
 * @param {clear} remove lastChild
 */

function clearHTML() {
  while (this.hasChildNodes()) {
    this.removeChild(this.lastChild);
  }
}

HTMLElement.prototype.clear = clearHTML;
