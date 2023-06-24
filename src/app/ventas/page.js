"use client";

import {ItemSales} from "../components/ItemVentas/ItemSales";
import { Titulo, Container } from "../../../styles/global/global.style";
import { useQuery } from "react-query";
import { getSoldProducts } from "../queries/products/products.queries";
import { CircularProgress } from "@mui/material";

const Ventas = () => {
  const { data, isLoading } = useQuery(["product"], getSoldProducts);

  if (isLoading) {
    return (
      <Container>
        <Titulo>Ventas</Titulo>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Titulo>Ventas</Titulo>
      <ItemSales data={data} />
    </Container>
  );
};

export default Ventas;