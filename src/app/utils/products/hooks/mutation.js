import { DeleteProductStock } from "@/app/action/products/action.products";
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
