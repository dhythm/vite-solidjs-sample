/* @refresh reload */
import { render } from "solid-js/web";
import { Selected } from "./components/Selected";

import "./index.css";

render(() => <Selected />, document.getElementById("root") as HTMLElement);
