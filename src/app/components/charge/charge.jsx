import React, { useState, useEffect, useRef } from "react";
import { getProducts } from "../../queries/products/products.queries";
import "./charge.css";

const Charge = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sellingPrice, setSellingPrice] = useState("");
  const [sellingQuantity, setSellingQuantity] = useState("");
  const [totalSellingPrice, setTotalSellingPrice] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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

    const cartItem = {
      product: selectedProduct,
      quantity: quantity,
    };

    setCartItems([...cartItems, cartItem]);

    setSelectedProduct(null);
    setSellingPrice("");
    setSellingQuantity("");
    setSearchQuery(""); // Limpiar el campo de búsqueda
    setSearchResults([]); // Limpiar los resultados de búsqueda
    searchInputRef.current.focus(); // Enfocar el campo de búsqueda nuevamente
  };

  return (
    <div className="charge">
      <form onSubmit={handleSearchSubmit} className="search">
        <input
          type="text"
          placeholder="Buscar producto por nombre o ID"
          value={searchQuery}
          onChange={handleSearchInputChange}
          ref={searchInputRef}
        />
        <button type="submit">Buscar</button>
      </form>

      {searchResults.length > 0 && !selectedProduct && totalSellingPrice <= 0 ? (
        <div className="results">
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
        <div className="results">
          <h3>Producto seleccionado</h3>
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

      {cartItems.length > 0 && (
        <div className="results">
          <h3>Carrito de venta:</h3>
          {cartItems.map((cartItem, index) => (
            <div key={index}>
              <p>Producto: {cartItem.product.name}</p>
              <p>Cantidad: {cartItem.quantity}</p>
            </div>
          ))}
          <p>Precio total de venta: ${totalSellingPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Charge;
