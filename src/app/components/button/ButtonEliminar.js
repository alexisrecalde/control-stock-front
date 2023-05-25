import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { deleteProduct } from "@/app/queries/products/products.queries";

export default function ButtonEliminar({ onClick }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={deleteProduct} variant="outlined" color="error">
        Eliminar
      </Button>
    </Stack>
  );
}
