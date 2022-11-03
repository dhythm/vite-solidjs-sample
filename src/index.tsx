/* @refresh reload */
import { render } from "solid-js/web";
import { Looped } from "./components/Looped";

import "./index.css";

render(() => <Looped />, document.getElementById("root") as HTMLElement);
