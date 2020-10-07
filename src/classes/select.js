export class Select {
  constructor(selector, label, data, onSelect) {
    this.$el = document.querySelector(selector);
    this.label = label;
    this.data = data;
    this.selectedId = null;
    this.options = [];
    this.init();
  }

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }

  async init() {
    await this.initializeVirtualSelect();
    this.initializeSelect();
  }

  async initializeVirtualSelect() {
    const options = await this.getData();
    this.options = options;

    const optionsTemplate = Object.keys(options)
      .map((key) => `<option value="${key}">${options[key].label}</option>`)
      .join("");
    const selTemplate = `<select class="virtual-select">${optionsTemplate}</select>`;
    this.$el.insertAdjacentHTML("beforeend", selTemplate);
  }

  renderSelect() {
    const optionItmes = Object.keys(this.options)
      .map(
        (key) =>
          `<div class="option" selected="${
            this.selectedId === key
          }" data-id="${key}">${this.options[key].label}</div>`
      )
      .join("");

    const optionsList = `<div class="options-list">${optionItmes}</div>`;

    const arrow = `<span class="select-arrow">▼</span>`;

    const selectInput = `<div class="select-input">${
      this.selectedId ? this.options.selectedId.label : "Выберите технологию"
    } ${arrow}</div>`;
    this.$el.insertAdjacentHTML("afterbegin", selectInput + optionsList);
  }

  onSelect(selectedId) {}

  onSelectToggle() {
    this.$el.classList.add("opened");
  }
}
