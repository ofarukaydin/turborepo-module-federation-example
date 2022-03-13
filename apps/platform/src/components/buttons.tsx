import { Button, Stack, Text, Center } from "@chakra-ui/react";
import React from "react";
import { useStore } from "store_mf/exports";
import { createSquare } from "pixi";

export const Buttons = (): JSX.Element => {
  const { addSquare, nodeCount, removeAllSquares } = useStore();

  return (
    <Stack direction="column" p={4} spacing={4} justifyContent="center" alignItems="center">
      <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
        <Button onClick={() => addSquare(createSquare(100, 100, 0x123))}>Add Node</Button>
        <Button onClick={removeAllSquares}>Remove All Squares</Button>
      </Stack>
      <Text fontSize="lg" fontWeight="bold">
        Node count: {nodeCount}
      </Text>
    </Stack>
  );
};
