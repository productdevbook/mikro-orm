"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1896],{26592:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={title:"Using AsyncLocalStorage"},s=void 0,l={unversionedId:"async-local-storage",id:"async-local-storage",title:"Using AsyncLocalStorage",description:"Since v5 AsyncLocalStorage is used inside RequestContext helper so this section",source:"@site/docs/async-local-storage.md",sourceDirName:".",slug:"/async-local-storage",permalink:"/docs/next/async-local-storage",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/async-local-storage.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671203480,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{title:"Using AsyncLocalStorage"},sidebar:"docs",previous:{title:"Using native BigInt PKs (MySQL and PostgreSQL)",permalink:"/docs/next/using-bigint-pks"},next:{title:"Creating Custom Driver",permalink:"/docs/next/custom-driver"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Since v5 ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," is used inside ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper so this section\nis no longer valid.")),(0,a.kt)("p",null,"In v4 and older versions, the ",(0,a.kt)("inlineCode",{parentName:"p"},"domain")," api was used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper. Since v4.0.3,\nwe can use the new ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," too, if we are on up-to-date node version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const storage = new AsyncLocalStorage<EntityManager>();\n\nconst orm = await MikroORM.init({\n  context: () => storage.getStore(),\n  // ...\n});\n\napp.use((req, res, next) => {\n  storage.run(orm.em.fork({ useContext: true }), next);\n});\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);