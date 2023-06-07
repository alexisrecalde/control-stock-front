"use client";
import axios from "axios";
import { config } from "../config.queries";
import qs from "qs";
const api = "http://localhost:8080/api";

export const getProducts = async () => {
  const url = `${api}/products?limit=1000`;
  try {
    const response = await axios.get(url, config);
    return response.data.docs;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProductMultiple = async ({ selectRows }) => {
  const stringifiedQuery = qs.stringify(
    {
      where: {
        id: {
          contains: selectRows,
        },
      },
    },
    { addQueryPrefix: true }
  );
  try {
    const req = await fetch(
      `http://localhost:8080/api/products/${stringifiedQuery}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await req.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
