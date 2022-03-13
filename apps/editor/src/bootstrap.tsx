import { StrictMode } from "react";
import * as ReactDOM from "react-dom";

import { App } from "./app";

export const render = (ref: HTMLElement) =>
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    ref
  );

export * from "pixi";
