/* @refresh reload */
import { render } from "solid-js/web";
import { Provided } from "./components/CounterProvider";

import "./index.css";

render(() => <Provided />, document.getElementById("root") as HTMLElement);
