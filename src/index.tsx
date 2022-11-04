/* @refresh reload */
import { render } from "solid-js/web";
import { ReduxApp } from "./components/ImmutableStore";

import "./index.css";

render(() => <ReduxApp />, document.getElementById("root") as HTMLElement);
