"use client"
import { useState } from 'react';

const Cobrar = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleCobro = () => {
    if (productoSeleccionado) {
      // Aquí puedes realizar cualquier lógica adicional para el cobro del producto
      console.log(`Producto cobrado. ID: ${productoSeleccionado}`);
    } else {
      console.log('No se ha seleccionado ningún producto');
    }
  };

  return (
    <div>
      <h2>Cobro de productos</h2>
      <select value={productoSeleccionado} onChange={(e) => setProductoSeleccionado(e.target.value)}>
        <option value="">Selecciona un producto</option>
        <option value="1">Producto 1</option>
        <option value="2">Producto 2</option>
        <option value="3">Producto 3</option>
      </select>
      <button onClick={handleCobro}>Cobrar</button>
    </div>
  );
};

export default Cobrar;
