export class Select {
  constructor(selector, label, data, onSelect) {
    this.$el = document.querySelector(selector);
    this.label = label;
    this.data = data;

    this.init();
  }

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }

  init() {
    this.initializeSelect();
  }

  async initializeSelect() {
    const options = await this.getData();
    const optionsTemplate = options
      .keys()
      .map((key) => `<option value="${key}">${options[key].label}</option>`);
    const selTemplate = `<select class="virtual-select">${optionsTemplate}</select>`;
    this.$el.insertAdjacentHTML("beforeend", selTemplate);
  }

  onSelect(selectedId) {}
}
