import { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store';
export declare const useTypedDispatch: () => import("redux-thunk").ThunkDispatch<{
    viewport: import("pixi-viewport").Viewport | null;
    renderer: import("pixi.js").Renderer | null;
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useTypedSelector: TypedUseSelectorHook<RootState>;
//# sourceMappingURL=hooks.d.ts.map