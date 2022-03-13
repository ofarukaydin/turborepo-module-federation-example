import { Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { createSquare, getViewport } from "pixi";

export const Buttons = (): JSX.Element => {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Button
          onClick={() => {
            const viewport = getViewport();
            const square = createSquare(100, 100, 0xf12);
            viewport.addChild(square);
          }}
        >
          Add Node
        </Button>
      </Stack>
    </>
  );
};
