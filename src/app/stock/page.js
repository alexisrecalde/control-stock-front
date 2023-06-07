"use client";
import React, { useEffect, useState } from "react";
import ItemStock from "../components/ItemDetailTable/ItemStock/ItemStock";
import { Titulo, Container } from "../../../styles/global/global.style";
import { useQuery } from "react-query";
import { getProducts } from "../queries/products/products.queries";
import { CircularProgress } from "@mui/material";

const Stock = () => {
  const { data, isLoading } = useQuery(["product"], getProducts);

  if (isLoading) {
    return (
      <Container>
        <Titulo>Stock</Titulo>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Titulo>Stock</Titulo>
      <ItemStock data={data} />
    </Container>
  );
};

export default Stock;
