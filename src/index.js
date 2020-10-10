import "./styles.scss";
import { Select } from "./classes/select";
import { data } from "./data";

new Select("#select", {
  placeholder: "Выбери элемент",
  data,
  //selectedId: "4",
  onSelect(item) {
    console.log(item);
  },
});
