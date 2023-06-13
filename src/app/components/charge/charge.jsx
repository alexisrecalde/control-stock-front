import React, { useState, useEffect, useRef } from "react";
import { getProducts } from "../../queries/products/products.queries";

const Charge = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sellingPrice, setSellingPrice] = useState("");
  const [sellingQuantity, setSellingQuantity] = useState("");
  const [totalSellingPrice, setTotalSellingPrice] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProductList(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = productList.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.id.toString().includes(searchQuery)
    );
    setSearchResults(results);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSellingPrice(product.salePrice);
    setSellingQuantity("");
  };

  const handleSellingQuantityChange = (e) => {
    setSellingQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    if (!selectedProduct || sellingQuantity.trim() === "") {
      return;
    }

    const quantity = parseInt(sellingQuantity, 10);
    if (isNaN(quantity) || quantity <= 0) {
      return;
    }

    const subtotal = quantity * parseFloat(sellingPrice);
    setTotalSellingPrice(totalSellingPrice + subtotal);
    setSelectedProduct(null);
    setSellingPrice("");
    setSellingQuantity("");
  };

  return (
    <div>
      <h2>Venta de productos</h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar producto por nombre o ID"
          value={searchQuery}
          onChange={handleSearchInputChange}
          ref={searchInputRef}
        />
        <button type="submit">Buscar</button>
      </form>

      {searchResults.length > 0 ? (
        <div>
          <h3>Resultados de la búsqueda:</h3>
          <ul>
            {searchResults.map((product) => (
              <li
                key={product.id}
                onClick={() => handleProductSelect(product)}
              >
                {product.name} - ID: {product.id}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {selectedProduct && (
        <div>
          <h3>Producto seleccionado:</h3>
          <p>Nombre: {selectedProduct.name}</p>
          <p>ID: {selectedProduct.id}</p>
          <p>Precio de venta: ${selectedProduct.salePrice}</p>
          <input
            type="number"
            value={sellingQuantity}
            onChange={handleSellingQuantityChange}
            placeholder="Cantidad"
          />
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      )}

      {totalSellingPrice > 0 && (
        <div>
          <h3>Carrito de venta:</h3>
          <p>Precio total de venta: ${totalSellingPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Charge;
