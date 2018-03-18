import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import flexboxgrid from "flexboxgrid";
import normalize from "normalize.css";
import animate from "animate.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
