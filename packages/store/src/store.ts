import { createSlice, configureStore } from '@reduxjs/toolkit';
import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport';
import { Provider } from 'react-redux';
import { useTypedDispatch, useTypedSelector } from './hooks';
import React from 'react';

type NodesSliceState = {
  viewport: Viewport | null;
  renderer: PIXI.Renderer | null;
  nodeCount: number;
};

const initialState: NodesSliceState = {
  viewport: null,
  renderer: null,
  nodeCount: 0,
};

const nodesSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    setViewport: (state, action) => {
      state.viewport = action.payload;
      const line = action.payload.addChild(new PIXI.Graphics());
      line
        .lineStyle(10, 0xff0000)
        .drawRect(0, 0, action.payload.worldWidth, action.payload.worldHeight);

      state.nodeCount = state.viewport?.children.length || 0;
    },
    setRenderer: (state, action) => {
      state.renderer = action.payload;
    },
    addSquare: (state, action) => {
      if (state.viewport) {
        state.viewport.addChild(action.payload);
        state.viewport.dirty = true;

        state.nodeCount = state.viewport?.children.length || 0;
      }
    },
    removeAllSquares: (state) => {
      if (state.viewport) {
        state.viewport.removeChildren(1);
        state.viewport.dirty = true;

        state.nodeCount = state.viewport?.children.length || 0;
      }
    },
  },
});

export const { setViewport, setRenderer, addSquare, removeAllSquares } = nodesSlice.actions;

export const store = configureStore({
  reducer: nodesSlice.reducer,
});

export const useStore = () => {
  const nodeCount = useTypedSelector((state) => state.nodeCount);
  const dispatch = useTypedDispatch();

  return {
    nodeCount,
    addSquare: (square: PIXI.Graphics) => dispatch(addSquare(square)),
    removeAllSquares: () => dispatch(removeAllSquares()),
    store,
  };
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return /*#__PURE__*/ React.createElement(
    Provider,
    {
      store: store,
    },
    children,
  );
};
