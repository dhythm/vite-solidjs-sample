/* @refresh reload */
import { render } from "solid-js/web";
import { ErrorHandler } from "./components/ErrorHandler";

import "./index.css";

render(() => <ErrorHandler />, document.getElementById("root") as HTMLElement);
