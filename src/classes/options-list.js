export class OptionsList {
  constructor(options, selectedId) {
    this.options = options;
    this.opened = false;
  }

  render() {
    const optionsList = Object.keys(this.options)
      .map(
        (key) =>
          `<div class="option" selected="${
            this.selectedId === key
          }" data-id="${key}">${this.options[key].label}</div>`
      )
      .join("");
    return `<div class="options-list ${
      this.opened ? "opened" : ""
    }">${optionsList}</div>`;
  }

  toggle() {
    this.opened = !this.opened;
  }
}
