/* @refresh reload */
import { render } from "solid-js/web";
import { BatchUpdates } from "./components/BatchUpdates";

import "./index.css";

render(() => <BatchUpdates />, document.getElementById("root") as HTMLElement);
