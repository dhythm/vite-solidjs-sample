/* @refresh reload */
import { render } from "solid-js/web";
import { SuspenseGreeting } from "./components/SuspenseGreeting";

import "./index.css";

render(
  () => <SuspenseGreeting />,
  document.getElementById("root") as HTMLElement
);
