import { createSlice, configureStore } from '@reduxjs/toolkit'
import * as PIXI from 'pixi.js'
import { Viewport } from 'pixi-viewport'

type NodesSliceState = {
  viewport: Viewport | null
  renderer: PIXI.Renderer | null
}

const initialState: NodesSliceState = {
  viewport: null,
  renderer: null
}

const nodesSlice = createSlice({
  name: 'nodes',
  initialState,
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
    setViewport: (state, action) => {
      state.viewport = action.payload
    },
    setRenderer: (state, action) => {
      state.renderer = action.payload
    }
  }
})

export const { setViewport, setRenderer } = nodesSlice.actions

export const store = configureStore({
  reducer: nodesSlice.reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch