/*! For license information please see 36838df1.40c1e0c9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[773385],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=n.createContext({}),l=function(e){var r=n.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(f.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,f=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,d=p["".concat(f,".").concat(m)]||p[m]||s[m]||a;return t?n.createElement(d,c(c({ref:r},u),{},{components:t})):n.createElement(d,c({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var f in r)hasOwnProperty.call(r,f)&&(i[f]=r[f]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},348612:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>f,toc:()=>u});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"backend-common.servertokenmanager.fromconfig",title:"ServerTokenManager.fromConfig()",description:"API reference for ServerTokenManager.fromConfig()"},i=void 0,f={unversionedId:"reference/backend-common.servertokenmanager.fromconfig",id:"reference/backend-common.servertokenmanager.fromconfig",title:"ServerTokenManager.fromConfig()",description:"API reference for ServerTokenManager.fromConfig()",source:"@site/../docs/reference/backend-common.servertokenmanager.fromconfig.md",sourceDirName:"reference",slug:"/reference/backend-common.servertokenmanager.fromconfig",permalink:"/docs/reference/backend-common.servertokenmanager.fromconfig",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.servertokenmanager.fromconfig.md",tags:[],version:"current",frontMatter:{id:"backend-common.servertokenmanager.fromconfig",title:"ServerTokenManager.fromConfig()",description:"API reference for ServerTokenManager.fromConfig()"}},l={},u=[{value:"Parameters",id:"parameters",level:2}],p={toc:u};function s(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-common"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/backend-common"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-common.servertokenmanager"}),(0,n.kt)("inlineCode",{parentName:"a"},"ServerTokenManager"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-common.servertokenmanager.fromconfig"}),(0,n.kt)("inlineCode",{parentName:"a"},"fromConfig"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"static fromConfig(config: Config, options: ServerTokenManagerOptions): ServerTokenManager;\n")),(0,n.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"config"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/config.config"}),"Config")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"/docs/reference/backend-common.servertokenmanageroptions"}),"ServerTokenManagerOptions")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-common.servertokenmanager"}),"ServerTokenManager")))}s.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var c,i,f=o(e),l=1;l<arguments.length;l++){for(var u in c=Object(arguments[l]))t.call(c,u)&&(f[u]=c[u]);if(r){i=r(c);for(var p=0;p<i.length;p++)n.call(c,i[p])&&(f[i[p]]=c[i[p]])}}return f}},541535:(e,r,t)=>{var n=t(862525),o=60103,a=60106;var c=60109,i=60110,f=60112;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),c=p("react.provider"),i=p("react.context"),f=p("react.forward_ref"),p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||d}function b(){}function k(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=k.prototype=new b;v.constructor=k,n(v,y.prototype),v.isPureReactComponent=!0;var h={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,a={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)O.call(r,n)&&!j.hasOwnProperty(n)&&(a[n]=r[n]);var f=arguments.length-2;if(1===f)a.children=t;else if(1<f){for(var l=Array(f),u=0;u<f;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===a[n]&&(a[n]=f[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:h.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,t,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case o:case a:f=!0}}if(f)return c=c(f=e),e=""===n?"."+P(f,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(N,"$&/")+"/"),C(c,r,t,"",(function(e){return e}))):null!=c&&(S(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||f&&f.key===c.key?"":(""+c.key).replace(N,"$&/")+"/")+e)),r.push(c)),1;if(f=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+P(i=e[l],l);f+=C(i,r,t,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)f+=C(i=i.value,r,t,u=n+P(i,l++),c);else if("object"===i)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return f}function _(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function T(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var M={current:null};function E(){var e=M.current;if(null===e)throw Error(m(321));return e}},827378:(e,r,t)=>{t(541535)}}]);