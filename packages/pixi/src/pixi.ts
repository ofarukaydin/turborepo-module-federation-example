import { createViewport, getViewport } from './viewport'
import * as PIXI from 'pixi.js'

let renderer: PIXI.Renderer;

function createRenderer(ref: HTMLElement) {
  // delete Renderer.__plugins.interaction;

  renderer = new PIXI.Renderer({
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

}

export function start(ref: HTMLElement) {
  createRenderer(ref)
  createViewport(renderer)
  window.onresize = () => {
    const viewport = getViewport()

    renderer.resize(window.innerWidth, window.innerHeight)
    viewport.resize(window.innerWidth, window.innerHeight)
  }
  update()
}

function update() {
  const viewport = getViewport()

  if (viewport.dirty) {
    renderer.render(viewport)
    viewport.dirty = false
  }
  requestAnimationFrame(() => update())
}

export function stop() {
  renderer.destroy(true)
}