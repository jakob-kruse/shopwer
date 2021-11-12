import { render } from "solid-js/web";
import { overrideCounter } from "./override/FasterCounter";

import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);
overrideCounter();
