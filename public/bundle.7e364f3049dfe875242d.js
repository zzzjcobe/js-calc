!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1);const r=document.getElementById("calc"),o=r.querySelectorAll(".symbolButton"),i=r.querySelector(".currentDisplay"),a=r.querySelector(".previousDisplay"),c=r.querySelector(".clearButton"),A=r.querySelector(".resultButton"),l=r.querySelector(".backButton"),d=r.querySelectorAll(".operatorButton"),s=r.querySelector(".operationDisplay");let p=void 0;d.forEach(n=>{n.addEventListener("click",e=>{if(e.preventDefault(),a.innerHTML.trim().length&&i.innerHTML.trim().length&&p){let e=x(a.innerHTML.trim(),i.innerHTML.trim(),p);i.innerHTML=e.toString(),B(),u(),t=n.getAttribute("data-symbol"),p=t,s.innerHTML=t}else{let e=n.getAttribute("data-symbol");p=e,s.innerHTML=e}var t})});for(let n of o)n.addEventListener("click",e=>{e.preventDefault();let t=n.getAttribute("data-symbol");if(p){if("."===t&&i.innerHTML.includes("."))return;f(t)}else"."===t&&a.innerHTML.includes(".")||C(t)});function u(){p=void 0,s.innerHTML=""}function f(n){i.innerHTML+=n}function C(n){a.innerHTML+=n}function x(n,e,t){switch(t){case"+":return+n+ +e;case"-":return+n-+e;case"*":return+n*+e;case"/":return+n/+e;default:return}}function B(){let n=i.innerHTML;a.innerHTML=n,i.innerHTML=""}c.addEventListener("click",n=>{p=void 0,n.preventDefault(),i.innerHTML="",a.innerHTML="",u()}),l.addEventListener("click",n=>{n.preventDefault(),function(){let n=i.innerHTML.toString().slice(0,-1);i.innerHTML=n}(),i.innerHTML.length||u(),s.innerHTML.length||i.innerHTML.length||function(){let n=a.innerHTML.toString().slice(0,-1);a.innerHTML=n}()}),A.addEventListener("click",n=>{n.preventDefault();let e=x(+a.innerHTML.trim(),i.innerHTML.toString().toUpperCase().trim(),p);i.innerHTML=e.toString(),B(),u()})},function(n,e,t){var r=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(n.i,o,i),o.locals?o.locals:{});n.exports=a},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a={};function c(n,e,t){for(var r=0;r<e.length;r++){var o={css:e[r][1],media:e[r][2],sourceMap:e[r][3]};a[n][r]?a[n][r](o):a[n].push(C(o,t))}}function A(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function s(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var u=null,f=0;function C(n,e){var t,r,o;if(e.singleton){var i=f++;t=u||(u=A(e)),r=s.bind(null,t,i,!1),o=s.bind(null,t,i,!0)}else t=A(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o()),n=t.base?n+t.base:n,e=e||[],a[n]||(a[n]=[]),c(n,e,t),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){a[n]||(a[n]=[]),c(n,e,t);for(var r=e.length;r<a[n].length;r++)a[n][r]();a[n].length=e.length,0===a[n].length&&delete a[n]}}}},function(n,e,t){(e=t(4)(!0)).push([n.i,"body{margin:0;padding:0;font-size:20px;line-height:1.6;font-family:monospace, sans-serif;color:#1d1d1d}h1,h2,h3,h4,h5,h6,p,ul,li,button{font-size:100%;margin:0;padding:0}*,*::before,*::after{box-sizing:border-box}button{cursor:pointer}h1{font-size:36px;text-align:center;background-color:#910;color:#fff;text-transform:uppercase;letter-spacing:4px}.calc{padding:20px;border:3px dashed #a7a7a7;box-shadow:2px 2px 20px #2e183a6b;border-radius:10px;width:100%;max-width:480px;margin:40px auto}.calc__wrapper{display:flex;flex-direction:column}.calc__display{background-color:#1d1d1d;position:relative;color:#fff;padding:10px 40px 10px 20px;text-align:right;margin-bottom:10px;border-radius:5px;min-height:93px;font-size:26px;line-height:1;word-break:break-all}.calc__previous{font-size:20px;min-height:20px;margin-bottom:12px;word-wrap:break-word;color:rgba(255,255,255,0.89)}.calc__current{word-wrap:break-word}.calc__body{display:flex}.calc__digits{width:66.6666%;display:flex;justify-content:space-around;flex-wrap:wrap;border-right:2px solid #1d1d1d}.calc__operators{width:33.3333%;display:flex;justify-content:space-around;flex-wrap:wrap;align-items:center;border-left:2px solid #1d1d1d}.calc__operators .calc__button{width:47%;padding:10px 0;font-size:26px}.calc__operation{position:absolute;top:10px;right:20px;opacity:.6}.calc__button{display:block;width:32%;margin-bottom:4px;background-color:#fff;border:1px solid #1d1d1d;outline:none;padding:10px 0}.calc__button:focus{box-shadow:2px 2px 2px rgba(0,0,0,0.2)}.calc__button:active{box-shadow:inset 2px 2px 2px rgba(0,0,0,0.4);background-color:#f1f1f1}.calc__button:hover{background-color:#f4effd}.calc__bottom{display:flex;justify-content:space-between;padding-top:10px;border-top:4px solid #1d1d1d}.resultButton{text-decoration:none !important}@media (max-width: 400px){.calc{padding:20px 5px}}\n","",{version:3,sources:["E:/www/Projects/js-calc/src/assets/styles.sass"],names:[],mappings:"AAAA,KACI,QAAS,CACT,SAAU,CACV,cAAe,CACf,eAAgB,CAChB,iCAAkC,CAClC,aAAc,CAAG,iCAGjB,cAAe,CACf,QAAS,CACT,SAAU,CAAG,qBAKb,qBAAsB,CAAG,OAGzB,cAAe,CAAG,GAGlB,cAAe,CACf,iBAAkB,CAClB,qBAAsB,CACtB,UAAW,CACX,wBAAyB,CACzB,kBAAmB,CAAG,MAGtB,YAAa,CACb,yBAA0B,CAC1B,iCAAkC,CAClC,kBAAmB,CACnB,UAAW,CACX,eAAgB,CAChB,gBAAiB,CACjB,eACI,YAAa,CACb,qBAAsB,CAAG,eAEzB,wBAAyB,CACzB,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAC5B,gBAAiB,CACjB,kBAAmB,CACnB,iBAAkB,CAClB,eAAgB,CAChB,cAAe,CACf,aAAc,CACd,oBAAqB,CAAG,gBAExB,cAAe,CACf,eAAgB,CAChB,kBAAmB,CACnB,oBAAqB,CACrB,4BAA4B,CAAG,eAE/B,oBAAqB,CAAG,YAExB,YAAa,CAAG,cAEhB,cAAe,CACf,YAAa,CACb,4BAA6B,CAC7B,cAAe,CACf,8BAA+B,CAAG,iBAElC,cAAe,CACf,YAAa,CACb,4BAA6B,CAC7B,cAAe,CACf,kBAAmB,CACnB,6BAA8B,CANjC,+BAQO,SAAU,CACV,cAAe,CACf,cAAe,CAAG,iBAEtB,iBAAkB,CAClB,QAAS,CACT,UAAW,CACX,UAAW,CAAG,cAEd,aAAc,CACd,SAAU,CACV,iBAAkB,CAClB,qBAAsB,CACtB,wBAAyB,CACzB,YAAa,CACb,cAAe,CAPlB,oBASO,sCAAsC,CAT7C,qBAWO,4CAA4C,CAC5C,wBAAyB,CAZhC,oBAcO,wBAAyB,CAAG,cAEhC,YAAa,CACb,6BAA8B,CAC9B,gBAAiB,CACjB,4BAA6B,CAAG,cAEpC,+BAA+B,CAAG,0BAGlC,MACI,gBAAiB,CAAG",file:"styles.sass",sourcesContent:["body {\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    line-height: 1.6;\n    font-family: monospace, sans-serif;\n    color: #1d1d1d; }\n\nh1, h2, h3, h4, h5, h6, p, ul, li, button {\n    font-size: 100%;\n    margin: 0;\n    padding: 0; }\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box; }\n\nbutton {\n    cursor: pointer; }\n\nh1 {\n    font-size: 36px;\n    text-align: center;\n    background-color: #910;\n    color: #fff;\n    text-transform: uppercase;\n    letter-spacing: 4px; }\n\n.calc {\n    padding: 20px;\n    border: 3px dashed #a7a7a7;\n    box-shadow: 2px 2px 20px #2e183a6b;\n    border-radius: 10px;\n    width: 100%;\n    max-width: 480px;\n    margin: 40px auto;\n    &__wrapper {\n        display: flex;\n        flex-direction: column; }\n    &__display {\n        background-color: #1d1d1d;\n        position: relative;\n        color: #fff;\n        padding: 10px 40px 10px 20px;\n        text-align: right;\n        margin-bottom: 10px;\n        border-radius: 5px;\n        min-height: 93px;\n        font-size: 26px;\n        line-height: 1;\n        word-break: break-all; }\n    &__previous {\n        font-size: 20px;\n        min-height: 20px;\n        margin-bottom: 12px;\n        word-wrap: break-word;\n        color: rgba(255,255,255,.89); }\n    &__current {\n        word-wrap: break-word; }\n    &__body {\n        display: flex; }\n    &__digits {\n        width: 66.6666%;\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n        border-right: 2px solid #1d1d1d; }\n    &__operators {\n        width: 33.3333%;\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n        align-items: center;\n        border-left: 2px solid #1d1d1d;\n        .calc__button {\n            width: 47%;\n            padding: 10px 0;\n            font-size: 26px; } }\n    &__operation {\n        position: absolute;\n        top: 10px;\n        right: 20px;\n        opacity: .6; }\n    &__button {\n        display: block;\n        width: 32%;\n        margin-bottom: 4px;\n        background-color: #fff;\n        border: 1px solid #1d1d1d;\n        outline: none;\n        padding: 10px 0;\n        &:focus {\n            box-shadow: 2px 2px 2px rgba(0,0,0,.2); }\n        &:active {\n            box-shadow: inset 2px 2px 2px rgba(0,0,0,.4);\n            background-color: #f1f1f1; }\n        &:hover {\n            background-color: #f4effd; } }\n    &__bottom {\n        display: flex;\n        justify-content: space-between;\n        padding-top: 10px;\n        border-top: 4px solid #1d1d1d; } }\n.resultButton {\n    text-decoration: none!important; }\n\n@media ( max-width: 400px ) {\n    .calc {\n        padding: 20px 5px; } }\n\n"]}]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(A," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,A;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var A=[].concat(n[c]);r&&o[A[0]]||(t&&(A[2]?A[2]="".concat(t," and ").concat(A[2]):A[2]=t),e.push(A))}},e}}]);