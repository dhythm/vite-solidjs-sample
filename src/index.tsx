/* @refresh reload */
import { render } from "solid-js/web";
import { Counter } from "./components/WithoutContext";

import "./index.css";

render(() => <Counter />, document.getElementById("root") as HTMLElement);
