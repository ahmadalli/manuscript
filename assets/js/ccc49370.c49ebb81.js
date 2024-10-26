"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[3249],{5856:(e,t,n)=>{n.d(t,{A:()=>B});var a=n(6540),s=n(4164),r=n(4096),l=n(4848);function i(e){let{children:t,className:n}=e;return(0,l.jsx)("article",{className:n,children:t})}var o=n(8774);const c={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,r.e7)(),{permalink:i,title:d}=n,u=a?"h1":"h2";return(0,l.jsx)(u,{className:(0,s.A)(c.title,t),children:a?d:(0,l.jsx)(o.A,{to:i,children:d})})}var u=n(1312),m=n(4586);const g=["zero","one","two","few","many","other"];function h(e){return g.filter((t=>e.includes(t)))}const f={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function p(){const{i18n:{currentLocale:e}}=(0,m.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),f}}),[e])}function x(){const e=p();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const s=n.select(t),r=n.pluralForms.indexOf(s);return a[Math.min(r,a.length-1)]}(n,t,e)}}var v=n(6266);const j={container:"container_mt6G"};function b(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=x();return t=>{const n=Math.ceil(t);return e(n,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,l.jsx)(l.Fragment,{children:n(t)})}function A(e){let{date:t,formattedDate:n}=e;return(0,l.jsx)("time",{dateTime:t,children:n})}function N(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function _(e){let{className:t}=e;const{metadata:n}=(0,r.e7)(),{date:a,readingTime:i}=n,o=(0,v.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsxs)("div",{className:(0,s.A)(j.container,"margin-vert--md",t),children:[(0,l.jsx)(A,{date:a,formattedDate:(c=a,o.format(new Date(c)))}),void 0!==i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N,{}),(0,l.jsx)(b,{readingTime:i})]})]});var c}var L=n(6913);const y={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function C(e){let{className:t}=e;const{metadata:{authors:n},assets:a}=(0,r.e7)();if(0===n.length)return null;const i=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,l.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?y.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,l.jsx)("div",{className:(0,s.A)(!i&&(o?"col col--12":"col col--6"),i?y.imageOnlyAuthorCol:y.authorCol),children:(0,l.jsx)(L.A,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function k(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(d,{}),(0,l.jsx)(_,{}),(0,l.jsx)(C,{})]})}var T=n(440),w=n(7910);function H(e){let{children:t,className:n}=e;const{isBlogPostPage:a}=(0,r.e7)();return(0,l.jsx)("div",{id:a?T.LU:void 0,className:(0,s.A)("markdown",n),children:(0,l.jsx)(w.A,{children:t})})}var O=n(7559),I=n(4336),P=n(8046);function R(){return(0,l.jsx)("b",{children:(0,l.jsx)(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function F(e){const{blogPostTitle:t,...n}=e;return(0,l.jsx)(o.A,{"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,l.jsx)(R,{})})}function M(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:n,title:a,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,m=n.length>0;if(!(m||u||i))return null;if(t){const e=!!(i||d||c);return(0,l.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,l.jsx)("div",{className:(0,s.A)("row","margin-top--sm",O.G.blog.blogFooterEditMetaRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(P.A,{tags:n})})}),e&&(0,l.jsx)(I.A,{className:(0,s.A)("margin-top--sm",O.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,l.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,l.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,l.jsx)(P.A,{tags:n})}),u&&(0,l.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":m}),children:(0,l.jsx)(F,{blogPostTitle:a,to:e.permalink})})]})}function B(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(i,{className:(0,s.A)(a,n),children:[(0,l.jsx)(k,{}),(0,l.jsx)(H,{children:t}),(0,l.jsx)(M,{})]})}},3858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(6540);var a=n(4164),s=n(1213),r=n(7559),l=n(4096),i=n(8027),o=n(5856),c=n(1312),d=n(9022),u=n(4848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,l.e7)(),{title:n,description:a,date:r,tags:i,authors:o,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(s.be,{title:n,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:r}),o.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")})]})}var h=n(5260);function f(){const e=(0,l.J_)();return(0,u.jsx)(h.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=n(7763),x=n(6896);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:s}=(0,l.e7)(),{nextItem:r,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:f}=d;return(0,u.jsxs)(i.A,{sidebar:t,toc:!g&&s.length>0?(0,u.jsx)(p.A,{toc:s,minHeadingLevel:h,maxHeadingLevel:f}):void 0,children:[(0,u.jsx)(x.A,{metadata:a}),(0,u.jsx)(o.A,{children:n}),(r||c)&&(0,u.jsx)(m,{nextItem:r,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(l.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(s.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(f,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},6896:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var a=n(4164),s=n(1312),r=n(5260),l=n(4848);function i(){return(0,l.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(r.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,l.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,l.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n(7559),g=n(7293);function h(e){let{className:t}=e;return(0,l.jsx)(g.A,{type:"caution",title:(0,l.jsx)(d,{}),className:(0,a.A)(t,m.G.common.draftBanner),children:(0,l.jsx)(u,{})})}function f(e){let{className:t}=e;return(0,l.jsx)(g.A,{type:"caution",title:(0,l.jsx)(i,{}),className:(0,a.A)(t,m.G.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function p(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(f,{...e})]})}function x(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||a.unlisted)&&(0,l.jsx)(p,{}),a.draft&&(0,l.jsx)(h,{})]})}},9022:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(8774),r=n(4848);function l(e){const{permalink:t,title:n,subLabel:l,isNext:i}=e;return(0,r.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(5195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(4848);const i="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(s.A,{...n,linkClassName:i,linkActiveClassName:o})})}},5195:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(6540),s=n(6342);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>i(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:r,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),c=o(i,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var u=n(8774),m=n(4848);function g(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,s.p)(),p=c??f.tableOfContents.minHeadingLevel,x=u??f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:r(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:p,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:x}}),[i,o,p,x])),(0,m.jsx)(h,{toc:v,className:n,linkClassName:i,...g})}},8046:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var a=n(4164),s=n(1312),r=n(8774);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=n(4848);function o(e){let{permalink:t,label:n,count:s,description:o}=e;return(0,i.jsxs)(r.A,{href:t,title:o,className:(0,a.A)(l.tag,s?l.tagWithCount:l.tagRegular),children:[n,s&&(0,i.jsx)("span",{children:s})]})}const c={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,a.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:c.tag,children:(0,i.jsx)(o,{...e})},e.permalink)))})]})}},8506:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(7151),s=n(6784),r=n(7107),l=n(7875),i=n(6188),o=n(7897);r.Yv.add(l.Cvc,i.X7I,o.C91);const c={...a.A,Icon:s.g}}}]);