import "./styles.css";

class Select {
  constructor(selector, label, url, onSelect) {
    this.selector = selector;
    this.label = label;
    this.url = url;
  }

  init() {
    document.querySelector(this.selector);
  }

  initializeSelect() {
    //TODO: Load options here and create select input
  }

  onSelect(selectedId) {}
}

const select = new Select(
  "#select",
  "Выберите технологию",
  "https://vladilen-dev.firebaseio.com/technologies.json"
);
