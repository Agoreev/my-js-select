import "./styles.css";
import { Select } from "./classes/select";
import { data } from "./data";

const select = new Select("#select", "Выберите технологию", data);
