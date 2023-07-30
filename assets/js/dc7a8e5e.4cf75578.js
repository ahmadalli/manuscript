"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[4789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=o,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[l]="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:10},c="Custom React Components",s={unversionedId:"tech/docusaurus/custom-react-components",id:"tech/docusaurus/custom-react-components",title:"Custom React Components",description:"1. Create a new React component in src/components/ folder.",source:"@site/docs/0100-tech/010-docusaurus/010-custom-react-components.md",sourceDirName:"0100-tech/010-docusaurus",slug:"/tech/docusaurus/custom-react-components",permalink:"/tech/docusaurus/custom-react-components",draft:!1,editUrl:"https://github.com/ahmadalli/public-notes/edit/main/docs/0100-tech/010-docusaurus/010-custom-react-components.md",tags:[],version:"current",lastUpdatedBy:"ahmadali shafiee",lastUpdatedAt:1690747549,formattedLastUpdatedAt:"Jul 30, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Docusaurus",permalink:"/tech/docusaurus/"},next:{title:"Internal Utilities",permalink:"/internal-utilities/"}},i={},u=[],p={toc:u},l="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-react-components"},"Custom React Components"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new React component in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/components/")," folder."),(0,o.kt)("li",{parentName:"ol"},"Import the component on top of the page where you want to use it.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-md"},"import <ComponentName> from '@site/src/components/<ComponentName>';\n"))),(0,o.kt)("li",{parentName:"ol"},"Use the component in the page.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-md"},"<ComponentName />\n")))),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/react"},"the official documentation")," for more information and more advanced use cases like global components."))}m.isMDXComponent=!0}}]);