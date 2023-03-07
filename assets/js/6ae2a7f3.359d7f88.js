/*! For license information please see 6ae2a7f3.359d7f88.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[119337],{603905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,d=p["".concat(l,".").concat(g)]||p[g]||f[g]||o;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},965383:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});a(827378);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"software-catalog-overview",title:"Backstage Software Catalog",sidebar_label:"Overview",description:"The Backstage Software Catalog"},i=void 0,l={unversionedId:"features/software-catalog/software-catalog-overview",id:"features/software-catalog/software-catalog-overview",title:"Backstage Software Catalog",description:"The Backstage Software Catalog",source:"@site/../docs/features/software-catalog/index.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/",permalink:"/docs/features/software-catalog/",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/index.md",tags:[],version:"current",frontMatter:{id:"software-catalog-overview",title:"Backstage Software Catalog",sidebar_label:"Overview",description:"The Backstage Software Catalog"},sidebar:"docs",previous:{title:"Linking in Local Packages",permalink:"/docs/local-dev/linking-local-packages"},next:{title:"The Life of an Entity",permalink:"/docs/features/software-catalog/life-of-an-entity"}},c={},u=[{value:"What is a Software Catalog?",id:"what-is-a-software-catalog",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Adding components to the catalog",id:"adding-components-to-the-catalog",level:2},{value:"Manually register components",id:"manually-register-components",level:3},{value:"Creating new components through Backstage",id:"creating-new-components-through-backstage",level:3},{value:"Static catalog configuration",id:"static-catalog-configuration",level:3},{value:"Updating component metadata",id:"updating-component-metadata",level:3},{value:"Finding software in the catalog",id:"finding-software-in-the-catalog",level:2},{value:"Starring components",id:"starring-components",level:2},{value:"Integrated tooling through plugins",id:"integrated-tooling-through-plugins",level:2},{value:"Links",id:"links",level:2}],p={toc:u};function f(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)("wrapper",r({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",r({},{id:"what-is-a-software-catalog"}),"What is a Software Catalog?"),(0,n.kt)("p",null,"The Backstage Software Catalog is a centralized system that keeps track of\nownership and metadata for all the software in your ecosystem (services,\nwebsites, libraries, data pipelines, etc). The catalog is built around the\nconcept of ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/features/software-catalog/descriptor-format"}),"metadata YAML files")," stored together with the\ncode, which are then harvested and visualized in Backstage."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"software-catalog",src:a(640646).Z,width:"2354",height:"1427"})),(0,n.kt)("h2",r({},{id:"how-it-works"}),"How it works"),(0,n.kt)("p",null,"Backstage and the Backstage Software Catalog make it easy for one team to manage\n10 services \u2014 and makes it possible for your company to manage thousands of\nthem."),(0,n.kt)("p",null,"More specifically, the Software Catalog enables two main use-cases:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Helping teams manage and maintain the software they own. Teams get a uniform\nview of all their software; services, libraries, websites, ML models \u2014 you\nname it, Backstage knows all about it."),(0,n.kt)("li",{parentName:"ol"},"Makes all the software in your company, and who owns it, discoverable. No\nmore orphan software hiding in the dark corners of your software ecosystem.")),(0,n.kt)("h2",r({},{id:"getting-started"}),"Getting Started"),(0,n.kt)("p",null,"The Software Catalog is available to browse at ",(0,n.kt)("inlineCode",{parentName:"p"},"/catalog"),". If you've followed\n",(0,n.kt)("a",r({parentName:"p"},{href:"../../getting-started"}),"Getting Started with Backstage"),", you should be able to\nbrowse the catalog at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(549093).Z,width:"1552",height:"989"})),(0,n.kt)("h2",r({},{id:"adding-components-to-the-catalog"}),"Adding components to the catalog"),(0,n.kt)("p",null,"The source of truth for the components in your software catalog are\n",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/features/software-catalog/descriptor-format"}),"metadata YAML files")," stored in source control (GitHub,\nGitHub Enterprise, GitLab, ...)."),(0,n.kt)("p",null,"There are 3 ways to add components to the catalog:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Manually register components"),(0,n.kt)("li",{parentName:"ol"},"Creating new components through Backstage"),(0,n.kt)("li",{parentName:"ol"},"Integrating with an ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/features/software-catalog/external-integrations"}),"external source"))),(0,n.kt)("h3",r({},{id:"manually-register-components"}),"Manually register components"),(0,n.kt)("p",null,"Users can register new components by going to ",(0,n.kt)("inlineCode",{parentName:"p"},"/create")," and clicking the\n",(0,n.kt)("strong",{parentName:"p"},"REGISTER EXISTING COMPONENT")," button:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(778854).Z,width:"1486",height:"484"})),(0,n.kt)("p",null,"Backstage expects the full URL to the YAML in your source control. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/components/artist-lookup-component.yaml\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"More examples can be found\n",(0,n.kt)("a",r({parentName:"em"},{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-model/examples"}),"here"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(134624).Z,width:"1916",height:"741"})),(0,n.kt)("p",null,"It is important to note that any kind of software can be registered in\nBackstage. Even if the software is not maintained by your company (SaaS\noffering, for example) it is still useful to create components for tracking\nownership."),(0,n.kt)("h3",r({},{id:"creating-new-components-through-backstage"}),"Creating new components through Backstage"),(0,n.kt)("p",null,"All software created through the\n",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/features/software-templates/"}),"Backstage Software Templates")," are automatically\nregistered in the catalog."),(0,n.kt)("h3",r({},{id:"static-catalog-configuration"}),"Static catalog configuration"),(0,n.kt)("p",null,"In addition to manually registering components, it is also possible to register\ncomponents through ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/conf/"}),"static configuration"),". For example, the\nabove example can be added using the following configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-yaml"}),"catalog:\n  locations:\n    - type: url\n      target: https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/components/artist-lookup-component.yaml\n")),(0,n.kt)("p",null,"More information about catalog configuration can be found\n",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/features/software-catalog/configuration"}),"here"),"."),(0,n.kt)("h3",r({},{id:"updating-component-metadata"}),"Updating component metadata"),(0,n.kt)("p",null,"Teams owning the components are responsible for maintaining the metadata about\nthem, and do so using their normal Git workflow."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(659776).Z,width:"713",height:"302"})),(0,n.kt)("p",null,"Once the change has been merged, Backstage will automatically show the updated\nmetadata in the software catalog after a short while."),(0,n.kt)("h2",r({},{id:"finding-software-in-the-catalog"}),"Finding software in the catalog"),(0,n.kt)("p",null,"By default the software catalog shows components owned by the team of the logged\nin user. But you can also switch to ",(0,n.kt)("em",{parentName:"p"},"All")," to see all the components across your\ncompany's software ecosystem. Basic inline ",(0,n.kt)("em",{parentName:"p"},"search")," and ",(0,n.kt)("em",{parentName:"p"},"column filtering")," makes\nit easy to browse a big set of components."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(646214).Z,width:"1243",height:"305"})),(0,n.kt)("h2",r({},{id:"starring-components"}),"Starring components"),(0,n.kt)("p",null,"For easy and quick access to components you visit frequently, Backstage supports\n",(0,n.kt)("em",{parentName:"p"},"starring")," of components:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(324876).Z,width:"1243",height:"318"})),(0,n.kt)("h2",r({},{id:"integrated-tooling-through-plugins"}),"Integrated tooling through plugins"),(0,n.kt)("p",null,"The software catalog is a great way to organize the infrastructure tools you use\nto manage the software. This is how Backstage creates one developer portal for\nall your tools. Rather than asking teams to jump between different\ninfrastructure UIs (and incurring additional cognitive overhead each time they\nmake a context switch), most of these tools can be organized around the entities\nin the catalog."),(0,n.kt)("p",null,(0,n.kt)("img",r({parentName:"p"},{src:"https://backstage.io/blog/assets/20-05-20/tabs.png",alt:"tools"}))),(0,n.kt)("p",null,"The Backstage platform can be customized by incorporating\n",(0,n.kt)("a",r({parentName:"p"},{href:"https://github.com/backstage/backstage/tree/master/plugins"}),"existing open source plugins"),",\nor by ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/plugins/"}),"building your own"),"."),(0,n.kt)("h2",r({},{id:"links"}),"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://backstage.io/blog/2020/06/22/backstage-service-catalog-alpha"}),"[Blog post] Backstage Service Catalog released in alpha"))))}f.isMDXComponent=!0},640646:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/header-93351b4254863212ce2c149a2a5ea388.png"},659776:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bsc-edit-7e97cc18ec455a13a185cb295cd6e303.png"},778854:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bsc-register-1-6299a20af4f79a6bdd4a64d927f2ec29.png"},134624:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bsc-register-2-f40631078ba9082e28a84d1cb301818e.png"},646214:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bsc-search-51a9aa0cdb9eb883d2bcf2451bc81362.png"},324876:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bsc-starred-7c2f867de967e254b190aac28e55bd0b.png"},549093:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/software-catalog-home-c6be1611f7b84313d64f3156a9a8bb19.png"},862525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(e,o){for(var s,i,l=r(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))a.call(s,u)&&(l[u]=s[u]);if(t){i=t(s);for(var p=0;p<i.length;p++)n.call(s,i[p])&&(l[i[p]]=s[i[p]])}}return l}},541535:(e,t,a)=>{var n=a(862525),r=60103,o=60106;var s=60109,i=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;r=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),i=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,t,a){this.props=e,this.context=t,this.refs=h,this.updater=a||d}function k(){}function b(e,t,a){this.props=e,this.context=t,this.refs=h,this.updater=a||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=m.prototype;var y=b.prototype=new k;y.constructor=b,n(y,m.prototype),y.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,a){var n,o={},s=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=a;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:r,type:e,key:s,ref:i,props:o,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var N=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,a,n,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case o:l=!0}}if(l)return s=s(l=e),e=""===n?"."+x(l,0):n,Array.isArray(s)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),C(s,t,a,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(N,"$&/")+"/")+e)),t.push(s)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=n+x(i=e[c],c);l+=C(i,t,a,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)l+=C(i=i.value,t,a,u=n+x(i,c++),s);else if("object"===i)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function T(e,t,a){if(null==e)return e;var n=[],r=0;return C(e,n,"","",(function(e){return t.call(a,e,r++)})),n}function B(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function _(){var e=P.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,a)=>{a(541535)}}]);