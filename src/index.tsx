/* @refresh reload */
import { render } from "solid-js/web";
import { TodosWithStore } from "./components/TodosWithStore";

import "./index.css";

render(
  () => <TodosWithStore />,
  document.getElementById("root") as HTMLElement
);
