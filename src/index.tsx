/* @refresh reload */
import { render } from "solid-js/web";
import { Photos } from "./components/Photos";

import "./index.css";

render(() => <Photos />, document.getElementById("root") as HTMLElement);
