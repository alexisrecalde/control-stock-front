exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 79917:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 78301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 83751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 54765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 59505:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87221))

/***/ }),

/***/ 87221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(23107);
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js + 1 modules
var disclosure = __webpack_require__(94702);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/menu/menu.js + 7 modules
var menu = __webpack_require__(39014);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 5 modules
var transition = __webpack_require__(62189);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(11966);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(74832);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BellIcon.js
var BellIcon = __webpack_require__(27141);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/components/nav/Nav.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




const navigation = [
    {
        name: "Home",
        href: "/",
        current: true
    },
    {
        name: "Stock",
        href: "/stock",
        current: false
    },
    {
        name: "Ventas",
        href: "/ventas",
        current: false
    },
    {
        name: "Cobrar",
        href: "/cobrar",
        current: false
    }
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Nav() {
    return /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p, {
        as: "nav",
        className: "bg-gray-800",
        children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative flex h-16 items-center justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(disclosure/* Disclosure.Button */.p.Button, {
                                        className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }),
                                            open ? /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon/* default */.Z, {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-shrink-0 items-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: "./",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "block h-8 w-auto lg:hidden",
                                                        src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
                                                        alt: "Your Company"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        className: "hidden h-8 w-auto lg:block",
                                                        src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
                                                        alt: "Your Company"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden sm:ml-6 sm:block",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                className: "flex space-x-4",
                                                children: navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: item.href,
                                                        className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium"),
                                                        "aria-current": item.current ? "page" : undefined,
                                                        children: item.name
                                                    }, item.name))
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            type: "button",
                                            className: "rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sr-only",
                                                    children: "View notifications"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(BellIcon/* default */.Z, {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v, {
                                            as: "div",
                                            className: "relative ml-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu.Button */.v.Button, {
                                                        className: "flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "sr-only",
                                                                children: "Open user menu"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                className: "h-8 w-8 rounded-full",
                                                                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                                                alt: ""
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                                                    as: react_.Fragment,
                                                    enter: "transition ease-out duration-100",
                                                    enterFrom: "transform opacity-0 scale-95",
                                                    enterTo: "transform opacity-100 scale-100",
                                                    leave: "transition ease-in duration-75",
                                                    leaveFrom: "transform opacity-100 scale-100",
                                                    leaveTo: "transform opacity-0 scale-95",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu.Items */.v.Items, {
                                                        className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Item */.v.Item, {
                                                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                                                                        children: "Your Profile"
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Item */.v.Item, {
                                                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                                                                        children: "Settings"
                                                                    })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Item */.v.Item, {
                                                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "#",
                                                                        className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"),
                                                                        children: "Sign out"
                                                                    })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Panel */.p.Panel, {
                        className: "sm:hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-y-1 px-2 pb-3 pt-2",
                            children: navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Button */.p.Button, {
                                    as: "a",
                                    href: item.href,
                                    className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"),
                                    "aria-current": item.current ? "page" : undefined,
                                    children: item.name
                                }, item.name))
                        })
                    })
                ]
            })
    });
}

// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(28360);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(53167);
;// CONCATENATED MODULE: ./src/app/layout.js
/* __next_internal_client_entry_do_not_use__ metadata,default auto */ 




const queryClient = new lib.QueryClient();
const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
            lang: "en",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("head", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Control Stock"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    className: (target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
                        children
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 83175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "metadata": () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\clau_\Desktop\Alexis\Frontend\react-query\control-stock-front\src\app\layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 41764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 28360:
/***/ (() => {



/***/ })

};
;