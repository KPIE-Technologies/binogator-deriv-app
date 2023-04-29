/*! For license information please see trader.js.LICENSE.txt */
!function(e,_){"object"==typeof exports&&"object"==typeof module?module.exports=_(require("@deriv/components"),require("@deriv/deriv-charts"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/deriv-charts","@deriv/shared","@deriv/translations","mobx","mobx-react","react","react-dom","react-router","react-router-dom"],_):"object"==typeof exports?exports["@deriv/trader"]=_(require("@deriv/components"),require("@deriv/deriv-charts"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):e["@deriv/trader"]=_(e["@deriv/components"],e["@deriv/deriv-charts"],e["@deriv/shared"],e["@deriv/translations"],e.mobx,e["mobx-react"],e.react,e["react-dom"],e["react-router"],e["react-router-dom"])}(self,((__WEBPACK_EXTERNAL_MODULE__deriv_components__,__WEBPACK_EXTERNAL_MODULE__deriv_deriv_charts__,__WEBPACK_EXTERNAL_MODULE__deriv_shared__,__WEBPACK_EXTERNAL_MODULE__deriv_translations__,__WEBPACK_EXTERNAL_MODULE_mobx__,__WEBPACK_EXTERNAL_MODULE_mobx_react__,__WEBPACK_EXTERNAL_MODULE_react__,__WEBPACK_EXTERNAL_MODULE_react_dom__,__WEBPACK_EXTERNAL_MODULE_react_router__,__WEBPACK_EXTERNAL_MODULE_react_router_dom__)=>(()=>{"use strict";var __webpack_modules__={"./src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar App = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.makeLazyLoader)(function () {\n  return (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.moduleLoader)(function () {\n    return Promise.all(/*! import() | trader-app */[__webpack_require__.e("vendors-node_modules_classnames_index_js-node_modules_lodash_debounce_index_js-node_modules_l-000144"), __webpack_require__.e("trader-app")]).then(__webpack_require__.bind(__webpack_require__, /*! ./App/index */ "./src/App/index.tsx"));\n  });\n}, function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L3RyYWRlci8uL3NyYy9pbmRleC50c3g/ZDk4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZUxhenlMb2FkZXIsIG1vZHVsZUxvYWRlciB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcblxuY29uc3QgQXBwID0gbWFrZUxhenlMb2FkZXIoXG4gICAgKCkgPT4gbW9kdWxlTG9hZGVyKCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInRyYWRlci1hcHBcIiwgd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vQXBwL2luZGV4JykpLFxuICAgICgpID0+IDxMb2FkaW5nIC8+XG4pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.tsx\n')},"@deriv/components":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_components__},"@deriv/deriv-charts":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_deriv_charts__},"@deriv/shared":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_shared__},"@deriv/translations":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_translations__},mobx:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_mobx__},"mobx-react":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_mobx_react__},react:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_react__},"react-dom":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_react_dom__},"react-router":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_react_router__},"react-router-dom":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_react_router_dom__}},__webpack_module_cache__={},leafPrototypes,getProto,inProgress,dataWebpackPrefix,loadStylesheet,installedCssChunks,chunkToChildrenMap;function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.loaded=!0,r.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.F={},__webpack_require__.E=e=>{Object.keys(__webpack_require__.F).map((_=>{__webpack_require__.F[_](e)}))},__webpack_require__.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(_,{a:_}),_},getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,_){if(1&_&&(e=this(e)),8&_)return e;if("object"==typeof e&&e){if(4&_&&e.__esModule)return e;if(16&_&&"function"==typeof e.then)return e}var r=Object.create(null);__webpack_require__.r(r);var t={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var a=2&_&&e;"object"==typeof a&&!~leafPrototypes.indexOf(a);a=getProto(a))Object.getOwnPropertyNames(a).forEach((_=>t[_]=()=>e[_]));return t.default=()=>e,__webpack_require__.d(r,t),r},__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((_,r)=>(__webpack_require__.f[r](e,_),_)),[])),__webpack_require__.u=e=>"trader/js/trader."+e+"."+{"vendors-node_modules_classnames_index_js-node_modules_lodash_debounce_index_js-node_modules_l-000144":"afadf033df4c98bebb7b","trader-app":"28d9be98d4f2cbc50fed","trade-modals":"aefeccf57632d82e4834","error-component":"6de819aef168ace3896c",contract:"0bf6f750ca07a4a7a56d","src_Modules_Trading_Components_Form_TradeParams_Accumulator_accumulators-info-display_jsx-src-dbdd9e":"5309cb7d96f98df03ab5","screen-small":"567c8afedd86300f59c3","screen-large":"e910c013c0cb2c18054f","settings-chart":"584f1a68c126e4170cde"}[e]+".js",__webpack_require__.miniCssF=e=>"trader/css/trader."+e+"."+{"trader-app":"efe3ae74313042cb7811","screen-small":"acf5b97b0555bc4754b5","screen-large":"39b66f1f6695286fc4dd"}[e]+".css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),inProgress={},dataWebpackPrefix="@deriv/trader:",__webpack_require__.l=(e,_,r,t)=>{if(inProgress[e])inProgress[e].push(_);else{var a,o;if(void 0!==r)for(var i=document.getElementsByTagName("script"),n=0;n<i.length;n++){var c=i[n];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==dataWebpackPrefix+r){a=c;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",dataWebpackPrefix+r),a.src=e),inProgress[e]=[_];var d=(_,r)=>{a.onerror=a.onload=null,clearTimeout(s);var t=inProgress[e];if(delete inProgress[e],a.parentNode&&a.parentNode.removeChild(a),t&&t.forEach((e=>e(r))),_)return _(r)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),o&&document.head.appendChild(a)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__webpack_require__.p="/",loadStylesheet=e=>new Promise(((_,r)=>{var t=__webpack_require__.miniCssF(e),a=__webpack_require__.p+t;if(((e,_)=>{for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var a=(i=r[t]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===_))return i}var o=document.getElementsByTagName("style");for(t=0;t<o.length;t++){var i;if((a=(i=o[t]).getAttribute("data-href"))===e||a===_)return i}})(t,a))return _();((e,_,r,t)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.href||_,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=n,a.parentNode.removeChild(a),t(c)}},a.href=_,document.head.appendChild(a)})(e,a,_,r)})),installedCssChunks={trader:0},__webpack_require__.f.miniCss=(e,_)=>{installedCssChunks[e]?_.push(installedCssChunks[e]):0!==installedCssChunks[e]&&{"trader-app":1,"screen-small":1,"screen-large":1}[e]&&_.push(installedCssChunks[e]=loadStylesheet(e).then((()=>{installedCssChunks[e]=0}),(_=>{throw delete installedCssChunks[e],_})))},(()=>{var e={trader:0};__webpack_require__.f.j=(_,r)=>{var t=__webpack_require__.o(e,_)?e[_]:void 0;if(0!==t)if(t)r.push(t[2]);else{var a=new Promise(((r,a)=>t=e[_]=[r,a]));r.push(t[2]=a);var o=__webpack_require__.p+__webpack_require__.u(_),i=new Error;__webpack_require__.l(o,(r=>{if(__webpack_require__.o(e,_)&&(0!==(t=e[_])&&(e[_]=void 0),t)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+_+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,t[1](i)}}),"chunk-"+_,_)}},__webpack_require__.F.j=_=>{if(!__webpack_require__.o(e,_)||void 0===e[_]){e[_]=null;var r=document.createElement("link");__webpack_require__.nc&&r.setAttribute("nonce",__webpack_require__.nc),r.rel="prefetch",r.as="script",r.href=__webpack_require__.p+__webpack_require__.u(_),document.head.appendChild(r)}};var _=(_,r)=>{var t,a,[o,i,n]=r,c=0;if(o.some((_=>0!==e[_]))){for(t in i)__webpack_require__.o(i,t)&&(__webpack_require__.m[t]=i[t]);if(n)n(__webpack_require__)}for(_&&_(r);c<o.length;c++)a=o[c],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunk_deriv_trader=self.webpackChunk_deriv_trader||[];r.forEach(_.bind(null,0)),r.push=_.bind(null,r.push.bind(r))})(),chunkToChildrenMap={"trader-app":["trade-modals","settings-chart"]},__webpack_require__.f.prefetch=(e,_)=>Promise.all(_).then((()=>{var _=chunkToChildrenMap[e];Array.isArray(_)&&_.map(__webpack_require__.E)}));var __webpack_exports__=__webpack_require__("./src/index.tsx");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()));