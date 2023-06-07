import { deleteProductMultiple } from "@/app/queries/products/products.queries";

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
