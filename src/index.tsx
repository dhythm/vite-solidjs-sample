/* @refresh reload */
import { render } from "solid-js/web";
import { Resource } from "./components/Resource";

import "./index.css";

render(() => <Resource />, document.getElementById("root") as HTMLElement);
