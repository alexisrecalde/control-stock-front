"use client";
import React from "react";
import { Titulo, Container } from "../../../styles/global/global.style";
import Charge from "../components/charge/charge";


const Cobrar = () => {
  return (
    <Container>
      <Titulo>Cobrar</Titulo>
      <Charge />
    </Container>
  );
};

export default Cobrar;
