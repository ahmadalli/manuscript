"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:10},a="Intro",l={unversionedId:"index",id:"index",title:"Intro",description:"This is documentation of my ideas, thoughts, and experiences.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/ahmadalli/public-notes/edit/main/docs/index.md",tags:[],version:"current",lastUpdatedBy:"ahmadali shafiee",lastUpdatedAt:1690125523,formattedLastUpdatedAt:"Jul 23, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",next:{title:"A Guide to Writing",permalink:"/a-guide-to-writing"}},s={},c=[{value:"Why",id:"why",level:2},{value:"Why Not a Blog?",id:"why-not-a-blog",level:3},{value:"What",id:"what",level:2},{value:"How",id:"how",level:2},{value:"Structure",id:"structure",level:3},{value:"Challenges",id:"challenges",level:2},{value:"Consistency",id:"consistency",level:3},{value:"Getting Updates",id:"getting-updates",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intro"},"Intro"),(0,r.kt)("p",null,"This is documentation of my ideas, thoughts, and experiences."),(0,r.kt)("h2",{id:"why"},"Why"),(0,r.kt)("h3",{id:"why-not-a-blog"},"Why Not a Blog?"),(0,r.kt)("p",null,"I've always valued the idea of sharing things publicly. ",(0,r.kt)("a",{parentName:"p",href:"https://www.hanselman.com/blog/do-they-deserve-the-gift-of-your-keystrokes"},"There are limited number of keystrokes that you get in life"),". Recently, it's been hard for me to express myself in a linear format and I find some aspects of blogging limiting:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I find it acceptable to have documentation entries that are incomplete and constantly evolving, but the same isn't typically true for blog posts unless it's explicitly stated within them. Having this freedom allows me to iterate and improve without worrying too much about completeness."),(0,r.kt)("li",{parentName:"ul"},"A timeline format doesn't effectively prioritize topics. Core topics often lose visibility over time as newer posts displace them at the top of the timeline.")),(0,r.kt)("p",null,"So, I've decided to try something new. As part of my job, I write a lot of documentation, and this looks like a viable path to try: to document my own life."),(0,r.kt)("h2",{id:"what"},"What"),(0,r.kt)("p",null,"I aim to achieve the following goals with this project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To write about and define my model of the world, my beliefs, and my experiences, and to build on these foundations."),(0,r.kt)("li",{parentName:"ul"},"To share insights, or knowledge or findings that I believe others might find valuable."),(0,r.kt)("li",{parentName:"ul"},"A personal note space, where I can keep useful links, technical stuff, and other notes.")),(0,r.kt)("h2",{id:"how"},"How"),(0,r.kt)("p",null,"Notes related to the project itself will be documented in ",(0,r.kt)("a",{parentName:"p",href:"/projects/public-notes"},"here"),"."),(0,r.kt)("h3",{id:"structure"},"Structure"),(0,r.kt)("p",null,"To prevent my tendencies towards perfectionism from hindering my writing, I'll start with a basic document structure and refine it as necessary. Things will move around every once in a while, but I'll try to keep the links intact."),(0,r.kt)("h2",{id:"challenges"},"Challenges"),(0,r.kt)("h3",{id:"consistency"},"Consistency"),(0,r.kt)("p",null,"One of the challenges of writing is that the content often does not fully capture my evolving thoughts. As thoughts and beliefs are constantly changing, some of these changes are reflected here while others are not. It's not a problem to solve, but it's something to keep in mind."),(0,r.kt)("h2",{id:"getting-updates"},"Getting Updates"),(0,r.kt)("p",null,"If you'd like to get updates when I publish new content, you can subscribe to ",(0,r.kt)("a",{parentName:"p",href:"/blog/rss.xml"},"RSS feed")," or ",(0,r.kt)("a",{parentName:"p",href:"https://ahmadallish.substack.com"},"my substack"),"."))}p.isMDXComponent=!0}}]);