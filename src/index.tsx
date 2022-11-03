/* @refresh reload */
import { render } from "solid-js/web";
import { Switchable } from "./components/Switchable";

import "./index.css";

render(() => <Switchable />, document.getElementById("root") as HTMLElement);
