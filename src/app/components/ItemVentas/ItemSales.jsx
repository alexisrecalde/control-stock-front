import React from "react";
import { TableContainer } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Buttons from "../button/Buttons";
import Swal from "sweetalert2";
import {useMutationDeleteProductSale} from "@/app/utils/products/hooks/mutation";


export const ItemSales = ({ data }) => {
  console.log(data);
  const [selectRows, setSelectRows] = useState([]);
  const columns = [
    {
      field: "date",
      headerName: "Fecha",
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
      field: "supplier",
      headerName: "Proveedor",
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
      headerName: "Precio de costo",
      width: 200,
      type: "number",
      align: "center",
      headerAlign: "center",

      //   valueGetter: (params) =>
      //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },

    {
      field: "salePrice",
      headerName: "Precio de Venta",
      width: 200,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
  ];

  const { mutate: mutateDeleteProductSale } = useMutationDeleteProductSale();

  const deleteProductSale = () => {
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
          mutateDeleteProductSale({ selectRows });
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
    <>
  
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
          <Buttons
            disabled={selectRows.length > 0 ? false : true}
            ids={selectRows}
            onClickAction={deleteProductSale}
            tittle="Eliminar"
            color="error"
          />
        </div>
      </TableContainer>
    </>
  );
}
