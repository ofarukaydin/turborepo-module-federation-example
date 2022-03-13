import * as PIXI from 'pixi.js'
import { getViewport } from './viewport';

interface PixiDraggable extends PIXI.DisplayObject {
  data: PIXI.InteractionData | null;
  dragging: boolean;
}

export const createSquare = (width: number, height: number, color: number): PIXI.Graphics => {
  const viewport = getViewport()
  console.log('viewport', viewport)
  const square = new PIXI.Graphics();
  square.beginFill(color);
  square.drawRect(0, 0, width, height);
  square.endFill();
  square.x = viewport.worldWidth / 2;
  square.y = viewport.worldHeight / 2;
  square.interactive = true;
  square.buttonMode = true;

  square
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove)

  viewport.addChild(square);

  return square;
}


function onDragStart(event: PIXI.InteractionEvent) {
  const viewport = getViewport()
  const square = event.currentTarget as PixiDraggable;

  square.alpha = 0.5;
  square.data = event.data;
  square.dragging = true;

  viewport.drag({ pressDrag: false });
  viewport.dirty = true

}

function onDragEnd(event: PIXI.InteractionEvent) {
  const viewport = getViewport()
  const square = event.currentTarget as PixiDraggable;

  square.alpha = 1;
  square.dragging = false;
  square.data = null;
  viewport.drag();
  viewport.dirty = true

}

function onDragMove(event: PIXI.InteractionEvent) {
  const viewport = getViewport()
  const square = event.currentTarget as PixiDraggable;

  if (square.dragging) {
    const newPosition = square.data?.getLocalPosition(square.parent);
    square.x = newPosition?.x || 0;
    square.y = newPosition?.y || 0;
  }
  viewport.dirty = true


}