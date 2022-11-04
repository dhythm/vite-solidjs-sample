/* @refresh reload */
import { render } from "solid-js/web";
import { Canvas } from "./components/Canvas";

import "./index.css";

render(() => <Canvas />, document.getElementById("root") as HTMLElement);
