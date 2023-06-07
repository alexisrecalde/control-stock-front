"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ButtonEliminar({ ids, onClickAction }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        disabled={ids.length > 0 ? false : true}
        onClick={onClickAction}
        variant="outlined"
        color="error"
      >
        Eliminar
      </Button>
    </Stack>
  );
}
