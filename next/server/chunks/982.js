"use strict";
exports.id = 982;
exports.ids = [982];
exports.modules = {

/***/ 50173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dW": () => (/* binding */ deleteProductMultiple),
  "b9": () => (/* binding */ deleteProductMultipleSale),
  "Xp": () => (/* binding */ getProducts),
  "qg": () => (/* binding */ getSoldProducts),
  "O9": () => (/* binding */ onEditSubmit),
  "MI": () => (/* binding */ onSubmit)
});

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(40248);
;// CONCATENATED MODULE: ./src/app/queries/config.queries.js
const config = {
    headers: {
        "content-type": "application/json"
    }
};

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(23803);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/app/queries/products/products.queries.js
/* __next_internal_client_entry_do_not_use__ getProducts,getSoldProducts,deleteProductMultiple,deleteProductMultipleSale,onSubmit,onEditSubmit auto */ 


const api = "http://localhost:8080/api";
const getProducts = async ()=>{
    const url = `${api}/products?limit=1000`;
    try {
        const response = await axios/* default.get */.Z.get(url, config);
        return response.data.docs;
    } catch (error) {
        console.error(error);
    }
};
const getSoldProducts = async ()=>{
    const url = `${api}/ventas?limit=1000`;
    try {
        const response = await axios/* default.get */.Z.get(url, config);
        return response.data.docs;
    } catch (error) {
        console.error(error);
    }
};
const deleteProductMultiple = async ({ selectRows  })=>{
    const stringifiedQuery = lib_default().stringify({
        where: {
            id: {
                contains: selectRows
            }
        }
    }, {
        addQueryPrefix: true
    });
    try {
        const req = await fetch(`http://localhost:8080/api/products/${stringifiedQuery}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await req.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
const deleteProductMultipleSale = async ({ selectRows  })=>{
    const stringifiedQuery = lib_default().stringify({
        where: {
            id: {
                contains: selectRows
            }
        }
    }, {
        addQueryPrefix: true
    });
    try {
        const req = await fetch(`http://localhost:8080/api/ventas/${stringifiedQuery}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await req.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
const onSubmit = async (data)=>{
    try {
        const stringifiedData = lib_default().stringify(data);
        const response = await fetch("http://localhost:8080/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: stringifiedData
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
    }
    ;
};
const onEditSubmit = async (editFormData)=>{
    try {
        const req = await fetch(`http://localhost:8080/api/products/${editFormData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editFormData)
        });
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


/***/ }),

/***/ 15300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ Titulo),
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3103);

const Titulo = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].h1 */ .ZP.h1`
  color: rgb(31 41 55);
  font-size: 30px;
  margin: 20px 0;

`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"].div */ .ZP.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 200vh
`;


/***/ })

};
;