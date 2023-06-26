import { DeleteProductStock, AddProduct, EditProduct, DeleteProductSale } from "@/app/action/products/action.products";
import { data } from "autoprefixer";
import { useMutation, useQueryClient } from "react-query";

export const useMutationDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(DeleteProductStock, {
    onSuccess: () => {
      queryClient.invalidateQueries("product");
    },
    onError: () => {
      queryClient.invalidateQueries("product");
    },
  });
};

export const useMutationDeleteProductSale = () => {
  const queryClient = useQueryClient();

  return useMutation(DeleteProductSale, {
    onSuccess: () => {
      queryClient.invalidateQueries("product");
    },
    onError: () => {
      queryClient.invalidateQueries("product");
    },
  });
};

export const useMutationAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(AddProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("product");
    },
    onError: () => {
      queryClient.invalidateQueries("product");
    },
  });
};

export const useMutationEditProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(EditProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("product");
    },
    onError: () => {
      queryClient.invalidateQueries("product");
    },
  });
};
