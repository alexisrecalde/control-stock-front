"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Buttons({ onClickAction, tittle, color, disabled }) {
  
  return (
    <Stack direction="row" spacing={2}>
      <Button
        disabled= {disabled}
        onClick={onClickAction}
        variant="outlined"
        color={color}
      >
        {tittle}
      </Button>
    </Stack>
  );
}
