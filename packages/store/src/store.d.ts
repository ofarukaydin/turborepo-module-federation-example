import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport';
declare type NodesSliceState = {
    viewport: Viewport | null;
    renderer: PIXI.Renderer | null;
};
export declare const setViewport: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, setRenderer: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<NodesSliceState, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<NodesSliceState, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
export {};
//# sourceMappingURL=store.d.ts.map