import { deleteProductMultiple, onSubmit, onEditSubmit, deleteProductMultipleSale} from "@/app/queries/products/products.queries";

export const DeleteProductStock = async ({ selectRows }) => {
  console.log("action products");
  try {
    console.log("action try");
    await deleteProductMultiple({ selectRows });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const DeleteProductSale = async ({ selectRows }) => {
  console.log("action products");
  try {
    console.log("action try");
    await deleteProductMultipleSale({ selectRows });
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const AddProduct = async (data) => {
  console.log("action productsAddaaa");
  console.log(data);
  try {
    console.log("action try");
    await onSubmit(data);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const EditProduct = async (editFormData) => {
  console.log("action productsEdit");
  console.log(editFormData);
  try {
    console.log("action try");
    await onEditSubmit(editFormData);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
