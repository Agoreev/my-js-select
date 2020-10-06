import { Arrow } from "./arrow";
import { OptionsList } from "./options-list";

export class Select {
  constructor(selector, label, data, onSelect) {
    this.$el = document.querySelector(selector);
    this.label = label;
    this.data = data;
    this.selectedId = null;
    this.options = [];
    this.opened = false;
    this.optionsList = new OptionsList(this.options, null);
    this.arrow = new Arrow();
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

  initializeSelect() {
    this.optionsList.options = this.options;
    const optionsList = this.optionsList.render();
    const arrow = this.arrow.render();
    const selectInput = `<div class="select-input">${
      this.selectedId ? this.options.selectedId.label : "Выберите технологию"
    } ${arrow}</div>`;
    this.$el.insertAdjacentHTML("afterbegin", selectInput + optionsList);
  }

  onSelect(selectedId) {}

  onSelectToggle() {
    this.opened = true;
  }
}
