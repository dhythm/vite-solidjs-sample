/* @refresh reload */
import { render } from "solid-js/web";
import { ControlFlow } from "./components/ControlFlow";

import "./index.css";

render(() => <ControlFlow />, document.getElementById("root") as HTMLElement);
