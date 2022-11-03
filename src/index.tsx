/* @refresh reload */
import { render } from "solid-js/web";

import { HelloWorld } from "./components/HelloWorld";
import "./index.css";

render(() => <HelloWorld />, document.getElementById("root") as HTMLElement);
