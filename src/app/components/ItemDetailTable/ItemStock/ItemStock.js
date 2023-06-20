"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { TableContainer } from "@mui/material";
import {
  useMutationDeleteProduct,
  useMutationAddProduct,
  useMutationEditProduct,
} from "@/app/utils/products/hooks/mutation";
import Swal from "sweetalert2";
import Dialog from "@mui/material/Dialog";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Buttons from "../../button/Buttons";

export default function ItemStock({ data }) {
  const [selectRows, setSelectRows] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const { register, handleSubmit, reset } = useForm({ defaultValues: {} });
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    description: "",
    quantity: "",
    price: "",
  });

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
    {
      field: "",
      headerName: "",
      width: 200,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Button
          variant="outlined"
          onClick={() => handleEditProduct(params.row)}
        >
          Editar
        </Button>
      ),
    },
  ];

  const { mutate: mutateDeleteProduct } = useMutationDeleteProduct();
  const { mutate: mutateAddProduct } = useMutationAddProduct(data);
  const { mutate: mutateEditProduct } = useMutationEditProduct(editFormData);

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

  const openAddProductDialog = () => {
    setOpenDialog(true);
  };

  const handleEditProduct = (product) => {
    setEditFormData({
      id: product.id,
      name: product.name,
      supplier: product.supplier,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      salePrice: product.salePrice,
    });
    setOpenDialogEdit(true);
  };

  const handleEditFormChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setEditFormData({ ...editFormData, [fieldName]: fieldValue });
    console.log("alexis gay");
  };

  const closeDialog = () => {
    setOpenDialogEdit(false);
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
          <Buttons tittle="Agregar" onClickAction={openAddProductDialog} />
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <form
              className="addProduct"
              onSubmit={handleSubmit((data, event) => {
                mutateAddProduct(data);
                event.target.reset();
              })}
            >
              <div>
                <label htmlFor="name" className="input-label">
                  Nombre
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Nombre"
                />
              </div>
              <hr className="divider" />

              <div>
                <label htmlFor="name" className="input-label">
                  Proveedor
                </label>
                <input
                  type="text"
                  {...register("supplier", { required: true })}
                  placeholder="Proveedor"
                />
              </div>
              <hr className="divider" />

              <div>
                <label htmlFor="name" className="input-label">
                  Descripción
                </label>
                <input
                  type="text"
                  {...register("description", { required: false })}
                  placeholder="Descripción"
                />
              </div>

              <hr className="divider" />

              <div>
                <label htmlFor="name" className="input-label">
                  Cantidad
                </label>
                <input
                  type="number"
                  {...register("quantity", { required: true })}
                  placeholder="Cantidad"
                />
              </div>

              <hr className="divider" />

              <div>
                <label htmlFor="name" className="input-label">
                  Precio de Costo
                </label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="Precio"
                />
              </div>

              <hr className="divider" />

              <div>
                <label htmlFor="name" className="input-label">
                  Precio de Venta
                </label>
                <input
                  type="number"
                  {...register("salePrice", { required: true })}
                  placeholder="Precio"
                />
              </div>

              <hr className="divider" />

              <Button type="submit">Agregar Producto</Button>

              <hr className="divider" />

              <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
            </form>
          </Dialog>
          <Buttons
            disabled={selectRows.length > 0 ? false : true}
            ids={selectRows}
            onClickAction={deleteProduct}
            tittle="Eliminar"
            color="error"
          />
        </div>
      </TableContainer>

      <Dialog open={openDialogEdit} onClose={() => setOpenDialogEdit(false)}>
        <form
          className="addProduct"
          onSubmit={(event) => {
            event.preventDefault(); // Previene el comportamiento de envío predeterminado del formulario
            mutateEditProduct(editFormData); // Llama a la función mutateEditProduct
            closeDialog(); // Llama a la función edir
          }}
        >
          <div>
            <label htmlFor="name" className="input-label">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={editFormData.name}
              onChange={handleEditFormChange}
              placeholder="Nombre"
            />
          </div>
          <hr className="divider" />
          <div>
            <label htmlFor="name" className="input-label">
              Proveedor
            </label>
            <input
              type="text"
              name="supplier"
              value={editFormData.supplier}
              onChange={handleEditFormChange}
              placeholder="Proveedor"
            />
          </div>
          <hr className="divider" />
          <div>
            <label htmlFor="description" className="input-label">
              Descripción
            </label>
            <input
              type="text"
              name="description"
              value={editFormData.description}
              onChange={handleEditFormChange}
              placeholder="Descripción"
            />
          </div>
          <hr className="divider" />
          <div>
            <label htmlFor="quantity" className="input-label">
              Cantidad
            </label>
            <input
              type="number"
              name="quantity"
              value={editFormData.quantity}
              onChange={handleEditFormChange}
              placeholder="Cantidad"
            />
          </div>
          <hr className="divider" />
          <div>
            <label htmlFor="price" className="input-label">
              Precio de Costo
            </label>
            <input
              type="number"
              name="price"
              value={editFormData.price}
              onChange={handleEditFormChange}
              placeholder="Precio"
            />
          </div>
          <hr className="divider" />
          <div>
            <label htmlFor="salePrice" className="input-label">
              Precio de Venta
            </label>
            <input
              type="number"
              name="salePrice"
              value={editFormData.salePrice}
              onChange={handleEditFormChange}
              placeholder="Precio"
            />
          </div>
          <hr className="divider" />
          <Button type="submit">Guardar Cambios</Button>
          <hr className="divider" />
          <Button onClick={() => setOpenDialogEdit(false)}>Cancelar</Button>
        </form>
      </Dialog>
    </div>
  );
}
