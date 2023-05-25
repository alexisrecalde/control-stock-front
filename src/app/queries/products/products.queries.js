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

export const deleteProduct = async () => {
  const stringifiedQuery = qs.stringify(
    {
      where: {
        id: {
          contains: [
            "646f950a145d2fad63ef0652",
            "646f950a145d2fad63ef0648",
            "646f9509145d2fad63ef063e",
          ],
        },
      },
    },
    { addQueryPrefix: true }
  );
  try {
    console.log();
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
