import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { start } from 'pixi';

import './index.scss';

export const App = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // On first render add app to DOM
    if (ref.current) {
      start(ref.current);
    }

    return () => stop();
  }, [ref]);

  return <div ref={ref} />;
};
ReactDOM.render(<App />, document.getElementById('app'));
