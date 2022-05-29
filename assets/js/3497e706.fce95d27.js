"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9394],{84424:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],p={title:"Using JSON properties"},s=void 0,l={unversionedId:"json-properties",id:"json-properties",title:"Using JSON properties",description:"Defining JSON properties",source:"@site/docs/json-properties.md",sourceDirName:".",slug:"/json-properties",permalink:"/docs/next/json-properties",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/json-properties.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1671203480,formattedLastUpdatedAt:"Dec 16, 2022",frontMatter:{title:"Using JSON properties"},sidebar:"docs",previous:{title:"Defining Entities via EntitySchema",permalink:"/docs/next/entity-schema"},next:{title:"Metadata Providers",permalink:"/docs/next/metadata-providers"}},c={},u=[{value:"Defining JSON properties",id:"defining-json-properties",level:2},{value:"Querying by JSON object properties",id:"querying-by-json-object-properties",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"defining-json-properties"},"Defining JSON properties"),(0,i.kt)("p",null,"Each database driver behaves a bit differently when it comes to JSON properties. MikroORM tries to unify the experience via ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/custom-types#jsontype"},"JsonType"),". This type will be also used if we\nspecify ",(0,i.kt)("inlineCode",{parentName:"p"},"type: 'json'"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Book {\n\n  @Property({ type: 'json', nullable: true })\n  meta?: { foo: string; bar: number };\n\n}\n")),(0,i.kt)("h2",{id:"querying-by-json-object-properties"},"Querying by JSON object properties"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Support for querying by JSON object properties was added in v4.4.2")),(0,i.kt)("p",null,"We can query by JSON object properties easily:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const b = await em.findOne(Book, {\n  meta: {\n    valid: true,\n    nested: {\n      foo: '123',\n      bar: 321,\n      deep: {\n        baz: 59,\n        qux: false,\n      },\n    },\n  },\n});\n")),(0,i.kt)("p",null,"Will produce following query (in postgres):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select \"e0\".* \nfrom \"book\" as \"e0\" \nwhere (\"meta\"->>'valid')::bool = true \n  and \"meta\"->'nested'->>'foo' = '123' \n  and (\"meta\"->'nested'->>'bar')::float8 = 321 \n  and (\"meta\"->'nested'->'deep'->>'baz')::float8 = 59 \n  and (\"meta\"->'nested'->'deep'->>'qux')::bool = false \nlimit 1\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"All drivers are currently supported (including sqlite and mongo). In postgres we\nalso try to cast the value if we detect number or boolean on the right-hand side.")))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);