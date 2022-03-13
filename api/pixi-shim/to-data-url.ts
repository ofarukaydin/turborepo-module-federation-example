const PIXI = require("./pixi");
import { createCanvas, loadImage, Image } from "canvas";

import type { Application } from 'pixi.js';

// creates new PIXI.Application({ --> view <-- })
module.exports.createView = function createView(width: number, height: number) {
  const view = createCanvas(width, height);

  (view as any).addEventListener = () => null;
  (view as any).style = {};

  return view;
};

// creates sprite from source
export async function createSprite(source: string) {
  const image = await loadImage(source);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(image, 0, 0);

  const baseTexture = PIXI.BaseTexture.fromBuffer(
    canvas.toBuffer(),
    canvas.width,
    canvas.height
  );
  const texture = new PIXI.Texture(baseTexture);
  const sprite = new PIXI.Sprite(texture);

  return sprite;
};

// saves view to data url
export function toDataURL(app: Application) {
  const ctx = app.view.getContext("2d");

  // iterate over children
  app.stage.children.forEach((child) => {
    if (child instanceof PIXI.Sprite) {
      const buffer = child.texture.baseTexture.resource.data;
      const image = new Image();
      const { height, width } = child.getBounds();

      image.width = width;
      image.height = height;
      image.src = buffer;

      // and draw them on canvas manually
      ctx.drawImage(
        image,
        child.x - child.anchor.x * child.width,
        child.y - child.anchor.y * child.height
      );
    }
  });

  const base64 = app.view.toDataURL("image/png");

  return base64;
};
