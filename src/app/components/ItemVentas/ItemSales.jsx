import React from "react";

export const ItemSales = ({ data }) => {
  console.log(data);
  

  return (
    <>
      <div>ItemSales</div>
      <table>
        <thead>
          <tr>
            <th>Compra</th>
            <th>Detalle</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.id}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
