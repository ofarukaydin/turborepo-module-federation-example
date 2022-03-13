"use strict";
var _a;
exports.__esModule = true;
exports.store = exports.setRenderer = exports.setViewport = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    viewport: null,
    renderer: null
};
var nodesSlice = (0, toolkit_1.createSlice)({
    name: 'nodes',
    initialState: initialState,
    reducers: {
        // addNode: (state, action) => {
        //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //   // doesn't actually mutate the state because it uses the Immer library,
        //   // which detects changes to a "draft state" and produces a brand new
        //   // immutable state based off those changes
        //   if (state.viewport) {
        //     state.viewport.addChild(action.payload)
        //     state.viewport.dirty = true
        //   }
        // },
        setViewport: function (state, action) {
            state.viewport = action.payload;
        },
        setRenderer: function (state, action) {
            state.renderer = action.payload;
        }
    }
});
exports.setViewport = (_a = nodesSlice.actions, _a.setViewport), exports.setRenderer = _a.setRenderer;
exports.store = (0, toolkit_1.configureStore)({
    reducer: nodesSlice.reducer
});
