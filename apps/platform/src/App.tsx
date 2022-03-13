import { Suspense, useEffect, useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Topbar } from 'ui';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'store_mf/exports';
import { render } from 'editor/bootstrap';

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
        <Topbar />
        <Suspense fallback={<div>Loading...</div>}>
          <div ref={editorRef} />
        </Suspense>
      </ChakraProvider>
    </StoreProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
