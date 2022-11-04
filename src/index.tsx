/* @refresh reload */
import { render } from "solid-js/web";
import { ColoredListWrapper } from "./components/ColoredList";

import "./index.css";

render(
  () => <ColoredListWrapper />,
  document.getElementById("root") as HTMLElement
);
