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

export const getSoldProducts = async () => {
  const url = `${api}/ventas?limit=1000`;
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


export const onSubmit = async (data) => {
  
  try {
    const stringifiedData = qs.stringify(data);
    const response = await fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: stringifiedData,
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
  };
  

};

export const onEditSubmit = async (editFormData) => {
  
  try {
    const req = await fetch(
      `http://localhost:8080/api/products/${editFormData.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editFormData),
      }
    );
    if (req.ok) {
      const data = await req.json();
      console.log("Producto actualizado:", editFormData);
      
    } else {
      console.error("Error al actualizar el producto:", req.status);
    }
  } catch (err) {
    console.log(err);
  }
};



