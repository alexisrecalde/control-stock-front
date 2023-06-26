import React, { useState, useEffect, useRef } from "react";
import { getProducts } from "../../queries/products/products.queries";
import "./charge.css";
import moment from 'moment-timezone';

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
  const [selected, setSelected] = useState();

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
    }

    const results = productList.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.id.toString().includes(searchQuery)
    );
    setSearchResults(results);
    setSelected(true);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSellingPrice(product.salePrice);
    setSellingQuantity("");
    setTimeout(() => {
      quantityRef.current.focus();
    }, 0);
    setSelected(false);
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
    setSearchQuery("");
    setSearchResults([]);
    searchInputRef.current.focus();
  };

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    const removedItem = updatedCartItems.splice(index, 1)[0];
    const subtotal =
      removedItem.quantity * parseFloat(removedItem.product.salePrice);
    setTotalSellingPrice(totalSellingPrice - subtotal);
    setCartItems(updatedCartItems);
  };

  const handleCobrar = async () => {
    if (cartItems.length === 0) {
      return;
    }

    // Actualizar los productos en la base de datos
    try {
      await Promise.all(
        cartItems.map(async ({ product, quantity }) => {
          const stock = parseFloat(product.quantity);
          const quantityValue = parseFloat(quantity);

          if (isNaN(stock) || isNaN(quantityValue)) {
            throw new Error("El stock o la cantidad no son valores numéricos");
          }

          const updatedStock = stock - quantityValue;
          const updatedProduct = { ...product, quantity: updatedStock };
          console.log(updatedProduct);
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

          // Agregar los productos vendidos a la base de datos de ventas
          const soldProducts = {...product, quantity: quantityValue, date: moment().tz('America/Argentina/Buenos_Aires').format(),}

          const salesResponse = await fetch("http://localhost:8080/api/ventas", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(soldProducts),
          });

          if (salesResponse.ok) {
            const responseData = await salesResponse.json();
            console.log("Datos enviados correctamente:", responseData);
            // Realizar cualquier otra acción después de subir los datos a la base de datos
          } else {
            console.error("Error al enviar los datos:", salesResponse.status);
            // Manejar el error de acuerdo a tus necesidades
          }
          
        })
      );

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

      {searchResults.length > 0 && selected && (
        <div className="results">
          <h3>Resultados de la búsqueda</h3>
          <ul>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Proveedor</th>
                  <th>Descripción</th>
                  <th>Stock</th>
                  <th>P. de venta</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((product) => (
                  <tr
                    key={product.id}
                    onClick={() => handleProductSelect(product)}
                    className="resultsSearch"
                  >
                    <td>{product.name}</td>
                    <td>{product.supplier}</td>
                    <td>{product.description}</td>
                    <td>{product.quantity}</td>
                    <td>${product.salePrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ul>
        </div>
      )}

      {selectedProduct && (
        <div className="selected">
          <h3>Producto seleccionado</h3>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Proveedor</th>
                <th>Descripción</th>
                <th>Precio de venta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedProduct.name}</td>
                <td>{selectedProduct.supplier}</td>
                <td>{selectedProduct.description}</td>
                <td>${selectedProduct.salePrice}</td>
              </tr>
            </tbody>
          </table>
          <input
            className="inputQuantity"
            type="number"
            value={sellingQuantity}
            onChange={handleSellingQuantityChange}
            placeholder="Cantidad"
            ref={quantityRef}
          />
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="selected">
          <h3>Carrito de venta</h3>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Proveedor</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio de venta</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{cartItem.product.name}</td>
                    <td>{cartItem.product.supplier}</td>
                    <td>{cartItem.product.description}</td>
                    <td>{cartItem.quantity}</td>
                    <td>${cartItem.product.salePrice}</td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => handleRemoveFromCart(index)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <hr style={{ borderTop: "1px solid black" }} />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <p className="totalPrice">Precio total de venta: ${totalSellingPrice.toFixed(2)}</p>
          <button onClick={handleCobrar}>Cobrar</button>
        </div>
      )}
    </div>
  );
};

export default Charge;
