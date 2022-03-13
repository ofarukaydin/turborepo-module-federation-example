import { createViewport } from './viewport'
import * as PIXI from 'pixi.js'
import { setRenderer, store } from 'store_mf/exports'

function createRenderer(ref: HTMLElement) {
  // delete Renderer.__plugins.interaction;

  const renderer = new PIXI.Renderer({
    backgroundAlpha: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    resolution: window.devicePixelRatio,
    antialias: true,
  })

  // renderer.addSystem(EventSystem as any, 'events')

  ref.appendChild(renderer.view)
  renderer.view.style.position = 'fixed'
  renderer.view.style.background = 'rgba(0,0,0,.1)'

  store.dispatch(setRenderer(renderer))

}

export function start(ref: HTMLElement) {
  createRenderer(ref)

  const renderer = store.getState().renderer

  if (!renderer) {
    return
  }

  createViewport(renderer)

  window.onresize = () => {
    const viewport = store.getState().viewport

    if (!viewport) {
      return
    }

    renderer.resize(window.innerWidth, window.innerHeight)
    viewport.resize(window.innerWidth, window.innerHeight)
  }
  update()
}

function update() {
  const viewport = store.getState().viewport
  const renderer = store.getState().renderer
  if (!viewport || !renderer) {
    return
  }

  if (viewport.dirty) {
    renderer.render(viewport)
    viewport.dirty = false
  }
  requestAnimationFrame(() => update())
}

export function stop() {
  const renderer = store.getState().renderer

  if (!renderer) {
    return
  }

  renderer.destroy(true)
}