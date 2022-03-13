import express from 'express';
const PIXI = require('pixi-shim');
require('pixi.js-legacy');

const { toDataURL, createView, createSprite } = require('pixi-shim/to-data-url');

const app = express();
const port = 8080;

const bunny =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAlCAYAAABcZvm2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWNJREFUeNrsV8sNwjAMbUqBBWACxB2pQ8AKcGALTsAJuDEFB1gBhuDAuWICmICPQh01pXWdJqEFcaglRGRbfonjPLuMc+5QwhjLGEJfZusjxZOL9akZKye9G98vPMfvsAx4qBfKwfzBL9s6uUHpI6U/u7+BKGkNb/H6umtk7MczF0HyfKS4zo/k/4AgTV8DOizrqX8oECgC+MGa8lGJp9sJDiAB8nyqYoglvJOPbP97IqoATGxWVZeXJlMQwYHA3piF8wJIblOVNBBxe3TPMLoHIKtxrbS7AAbBrA4Y5NaPAXf8LjN6wKZ0RaZOnlAFZnuXInVR4FTE6eYp0olPhhshtXsAwY3PquoAJNkIY33U7HTs7hYBwV24ItUKqDwgKF3VzAZ6k8HF+B1BMF8xRJbeJoqMXHZAAQ1kwoluURCdzepEugGEImBrIADB7I4lyfbJLlw92FKE6b5hVd+ktv4vAQYASMWxvlAAvcsAAAAASUVORK5CYII=';

app.get('/', async (req, res) => {
  const app = new PIXI.Application({
    backgroundColor: 0x1099bb,
    view: createView(320, 240),
    preserveDrawingBuffer: true,
  });
  const sprite = await createSprite(bunny);

  sprite.position.set(app.view.width / 2, app.view.height / 2);
  sprite.anchor.set(0.5);

  // app.renderer.backgroundColor = 0xffffff;
  app.stage.addChild(sprite);
  app.render();

  const base64 = toDataURL(app);

  console.log(base64, 'BASE64');

  res.send(base64);
});

app.listen(port, () => {
  console.log(`api listening at http://localhost:${port}`);
});
