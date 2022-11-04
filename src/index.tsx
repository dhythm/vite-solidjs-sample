/* @refresh reload */
import { render } from "solid-js/web";
import { On } from "./components/On";

import "./index.css";

render(() => <On />, document.getElementById("root") as HTMLElement);
