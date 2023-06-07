"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import ButtonEliminar from "../../button/ButtonEliminar";
import { TableContainer } from "@mui/material";
import { useMutationDeleteProduct } from "@/app/utils/products/hooks/mutation";
import Swal from "sweetalert2";

export default function ItemStock({ data }) {
  const [selectRows, setSelectRows] = useState([]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 200,
      description: "Nombre",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "Descripcion",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "Cantidad",
      type: "number",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Precio",
      width: 200,
      type: "number",
      align: "center",
      headerAlign: "center",

      //   valueGetter: (params) =>
      //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const { mutate: mutateDeleteProduct } = useMutationDeleteProduct();

  const deleteProduct = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
    });

    swalWithBootstrapButtons
      .fire({
        title: "Eliminar producto/s",
        text: "Estas seguro que queres eliminar estos productos?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          mutateDeleteProduct({ selectRows });
          swalWithBootstrapButtons.fire(
            "Eliminado!",
            "Los productos fueron eliminados.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelar",
            "Cancelaste esta operacion",
            "error"
          );
        }
      });
  };
  return (
    <div style={{ paddingBottom: "100px" }}>
      <TableContainer style={{ maxHeight: 800 }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25, 50]}
          checkboxSelection
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setSelectRows(newRowSelectionModel);
          }}
          rowSelectionModel={selectRows}
        />

        <div
          style={{ display: "flex", justifyContent: "end", margin: "20px 0" }}
        >
          <ButtonEliminar ids={selectRows} onClickAction={deleteProduct} />
        </div>
      </TableContainer>
    </div>
  );
}
