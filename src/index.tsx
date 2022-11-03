/* @refresh reload */
import { render } from "solid-js/web";
import { Popup } from "./components/Popup";

import "./index.css";

render(() => <Popup />, document.getElementById("root") as HTMLElement);
