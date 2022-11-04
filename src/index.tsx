/* @refresh reload */
import { render } from "solid-js/web";
import { Todos } from "./components/Todos";

import "./index.css";

render(() => <Todos />, document.getElementById("root") as HTMLElement);
