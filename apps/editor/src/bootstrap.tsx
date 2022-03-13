import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";

export const render = (ref: HTMLElement) =>
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    ref
  );

export * from "pixi";
