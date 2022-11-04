/* @refresh reload */
import { render } from "solid-js/web";
import { Untrack } from "./components/Untrack";

import "./index.css";

render(() => <Untrack />, document.getElementById("root") as HTMLElement);
