/* @refresh reload */
import { render } from "solid-js/web";
import { GreetingWrapper } from "./components/SplittedGreeting";

import "./index.css";

render(
  () => <GreetingWrapper />,
  document.getElementById("root") as HTMLElement
);
