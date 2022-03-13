import React, { lazy, Suspense, useEffect, useRef } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { Buttons } from "./components/buttons";
import ReactDOM from "react-dom";
import { StoreProvider } from "store_mf/exports";
import { render } from "editor/bootstrap";

export function App() {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      render(editorRef.current);
    }
  }, []);

  return (
    <StoreProvider>
      <ChakraProvider>
        <Buttons />
        <Suspense fallback={<div>Loading...</div>}>
          <div ref={editorRef} />
        </Suspense>
      </ChakraProvider>
    </StoreProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
