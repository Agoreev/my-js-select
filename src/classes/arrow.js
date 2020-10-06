export class Arrow {
  constructor() {
    this.opened = false;
  }

  render() {
    return `<span class="select-arrow">${this.opened ? "▲" : "▼"}</span>`;
  }
}
