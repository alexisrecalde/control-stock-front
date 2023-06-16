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
  const quantityRef = useRef(null);
  const [isCobrarPressed, setIsCobrarPressed] = useState(false);


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

  // useEffect(() => {

  // }, [searchResults, cartItems, searchQuery, totalSellingPrice, selectedProduct]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {

    e.preventDefault();
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    }

    const results = productList.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.id.toString().includes(searchQuery)
    );
    setSearchResults(results);
    console.log(searchResults);
  };
  console.log(searchResults);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSellingPrice(product.salePrice);
    setSellingQuantity("");
    setTimeout(() => {
        quantityRef.current.focus();
      }, 0);
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
  console.log(cartItems);
  console.log(searchResults.length);
  console.log(totalSellingPrice);

  const handleCobrar = async () => {
    if (cartItems.length === 0) {
      return;
    }
  
    // Actualizar los productos en la base de datos
    try {
      await Promise.all(
        cartItems.map(async ({ product, quantity }) => {
          console.log(product);
          const stock = parseFloat(product.quantity);
          const quantityValue = parseFloat(quantity);
  
          if (isNaN(stock) || isNaN(quantityValue)) {
            throw new Error("El stock o la cantidad no son valores numéricos");
          }
  
          const updatedStock = stock - quantityValue; // Calcula el stock actualizado
  
          const updatedProduct = { ...product, quantity: updatedStock };
          console.log(updatedProduct.stock); // Muestra el stock actualizado
  
          const response = await fetch(
            `http://localhost:8080/api/products/${updatedProduct.id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedProduct),
            }
          );
  
          if (!response.ok) {
            throw new Error("Error al actualizar el producto");
          }
        })
      );
  
      // Luego, restablecer el estado y limpiar el carrito de venta
      setIsCobrarPressed(true);
      setCartItems([]);
      setTotalSellingPrice(0);
    } catch (error) {
      console.error("Error al actualizar los productos:", error);
    }
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

      {searchResults.length > 0 ? (
        <div className="results">
          <h3>Resultados de la búsqueda:</h3>
          <ul>
            {searchResults.map((product) => (
              <li key={product.id} onClick={() => handleProductSelect(product)}>
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
            ref={quantityRef}
          />
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      )}

      {cartItems.length > 0 &&  (
        <div className="results">
          <h3>Carrito de venta:</h3>
          {cartItems.map((cartItem, index) => (
            <div key={index}>
              <p>Producto: {cartItem.product.name}</p>
              <p>Cantidad: {cartItem.quantity}</p>
            </div>
          ))}
          <p>Precio total de venta: ${totalSellingPrice.toFixed(2)}</p>
          <button onClick={handleCobrar}>Cobrar</button>
        </div>
      )}
    </div>
  );
};

export default Charge;
