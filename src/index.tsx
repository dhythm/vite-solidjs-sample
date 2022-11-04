/* @refresh reload */
import { render } from "solid-js/web";
import { InfoWrapper } from "./components/Info";

import "./index.css";

render(() => <InfoWrapper />, document.getElementById("root") as HTMLElement);
