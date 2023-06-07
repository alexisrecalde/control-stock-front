"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import ButtonEliminar from "../../button/ButtonEliminar";
import { TableContainer } from "@mui/material";
import { useMutationDeleteProduct } from "@/app/utils/products/hooks/mutation";
import Swal from "sweetalert2";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

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

  const [openDialog, setOpenDialog] = useState(false);

  const openAddProductDialog = () => {
    setOpenDialog(true);
  };

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

  const { register, handleSubmit, reset } = useForm({ defaultValues: {} });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/products', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log("Datos enviados correctamente:", responseData);
        // Realizar cualquier otra acción después de subir los datos a la base de datos
      } else {
        console.error("Error al enviar los datos:", response.status);
        // Manejar el error de acuerdo a tus necesidades
      }
    } catch (error) {
      console.error("Error de red:", error);
      // Manejar el error de red de acuerdo a tus necesidades
    }
  
    reset(); // Limpia los campos del formulario
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
          <ButtonEliminar
            tittle="Agregar"
            onClickAction={openAddProductDialog}
          />
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <form className="addProduct" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register("id", { required: true })}
                placeholder="ID"
              />
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Nombre"
              />
              <input
                type="text"
                {...register("description", { required: true })}
                placeholder="Descripción"
              />
              <input
                type="number"
                {...register("quantity", { required: true })}
                placeholder="Cantidad"
              />
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Precio"
              />
              <Button type="submit" >
                Agregar Producto
              </Button>
              <Button onClick={() => setOpenDialog(false)}>Cancelar</Button> 
            </form>
            
          </Dialog>
          <ButtonEliminar
            disabled={selectRows.length > 0 ? false : true}
            ids={selectRows}
            onClickAction={deleteProduct}
            tittle="Eliminar"
            color="error"
          />
        </div>
      </TableContainer>
    </div>
  );
}
