import React, { lazy, Suspense, useEffect, useRef } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { Buttons } from "./components/buttons";
import { render } from "editor/bootstrap";
import ReactDOM from "react-dom";
import { Provider, store } from "store";

export function App() {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      render(editorRef.current);
    }
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Buttons />
        <Suspense fallback={<div>Loading...</div>}>
          <div ref={editorRef} />
        </Suspense>
      </ChakraProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
