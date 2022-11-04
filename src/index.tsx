/* @refresh reload */
import { render } from "solid-js/web";
import { HulkOutText } from "./components/HulkOutText";

import "./index.css";

render(() => <HulkOutText />, document.getElementById("root") as HTMLElement);
