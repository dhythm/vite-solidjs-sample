/* @refresh reload */
import { render } from "solid-js/web";
import { Position } from "./components/Position";

import "./index.css";

render(() => <Position />, document.getElementById("root") as HTMLElement);
