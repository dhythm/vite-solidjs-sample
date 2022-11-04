/* @refresh reload */
import { render } from "solid-js/web";
import { Transition } from "./components/Transition";

import "./index.css";

render(() => <Transition />, document.getElementById("root") as HTMLElement);
