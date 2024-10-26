"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[7643],{2052:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});a(6540);var n=a(4164),s=a(4586),r=a(1213),l=a(7559),i=a(8027),o=a(1312),c=a(9022),d=a(4848);function u(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return(0,d.jsxs)("nav",{className:"pagination-nav","aria-label":(0,o.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,d.jsx)(c.A,{permalink:a,title:(0,d.jsx)(o.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),n&&(0,d.jsx)(c.A,{permalink:n,title:(0,d.jsx)(o.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}var g=a(1463),m=a(4096),h=a(5856);function p(e){let{items:t,component:a=h.A}=e;return(0,d.jsx)(d.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,d.jsx)(m.in,{content:t,children:(0,d.jsx)(a,{children:(0,d.jsx)(t,{})})},t.metadata.permalink)}))})}var x=a(5260);function j(e){const t=(0,m.kJ)(e);return(0,d.jsx)(x.A,{children:(0,d.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function f(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,s.A)(),{blogDescription:n,blogTitle:l,permalink:i}=t,o="/"===i?a:l;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.be,{title:o,description:n}),(0,d.jsx)(g.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:n}=e;return(0,d.jsxs)(i.A,{sidebar:n,children:[(0,d.jsx)(p,{items:a}),(0,d.jsx)(u,{metadata:t})]})}function A(e){return(0,d.jsxs)(r.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogListPage),children:[(0,d.jsx)(f,{...e}),(0,d.jsx)(j,{...e}),(0,d.jsx)(b,{...e})]})}},5856:(e,t,a)=>{a.d(t,{A:()=>G});var n=a(6540),s=a(4164),r=a(4096),l=a(4848);function i(e){let{children:t,className:a}=e;return(0,l.jsx)("article",{className:a,children:t})}var o=a(8774);const c={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:a,isBlogPostPage:n}=(0,r.e7)(),{permalink:i,title:d}=a,u=n?"h1":"h2";return(0,l.jsx)(u,{className:(0,s.A)(c.title,t),children:n?d:(0,l.jsx)(o.A,{to:i,children:d})})}var u=a(1312),g=a(4586);const m=["zero","one","two","few","many","other"];function h(e){return m.filter((t=>e.includes(t)))}const p={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function x(){const{i18n:{currentLocale:e}}=(0,g.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),p}}),[e])}function j(){const e=x();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=a.select(t),r=a.pluralForms.indexOf(s);return n[Math.min(r,n.length-1)]}(a,t,e)}}var f=a(6266);const b={container:"container_mt6G"};function A(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=j();return t=>{const a=Math.ceil(t);return e(a,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,l.jsx)(l.Fragment,{children:a(t)})}function v(e){let{date:t,formattedDate:a}=e;return(0,l.jsx)("time",{dateTime:t,children:a})}function N(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function _(e){let{className:t}=e;const{metadata:a}=(0,r.e7)(),{date:n,readingTime:i}=a,o=(0,f.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,l.jsxs)("div",{className:(0,s.A)(b.container,"margin-vert--md",t),children:[(0,l.jsx)(v,{date:n,formattedDate:(c=n,o.format(new Date(c)))}),void 0!==i&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(N,{}),(0,l.jsx)(A,{readingTime:i})]})]});var c}var k=a(6913);const w={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function T(e){let{className:t}=e;const{metadata:{authors:a},assets:n}=(0,r.e7)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,l.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?w.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,l.jsx)("div",{className:(0,s.A)(!i&&(o?"col col--12":"col col--6"),i?w.imageOnlyAuthorCol:w.authorCol),children:(0,l.jsx)(k.A,{author:{...e,imageURL:n.authorsImageUrls[t]??e.imageURL}})},t)))})}function y(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(d,{}),(0,l.jsx)(_,{}),(0,l.jsx)(T,{})]})}var F=a(440),P=a(7910);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:n}=(0,r.e7)();return(0,l.jsx)("div",{id:n?F.LU:void 0,className:(0,s.A)("markdown",a),children:(0,l.jsx)(P.A,{children:t})})}var R=a(7559),O=a(4336),U=a(8046);function L(){return(0,l.jsx)("b",{children:(0,l.jsx)(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function M(e){const{blogPostTitle:t,...a}=e;return(0,l.jsx)(o.A,{"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,l.jsx)(L,{})})}function B(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:a,title:n,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,g=a.length>0;if(!(g||u||i))return null;if(t){const e=!!(i||d||c);return(0,l.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,l.jsx)("div",{className:(0,s.A)("row","margin-top--sm",R.G.blog.blogFooterEditMetaRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(U.A,{tags:a})})}),e&&(0,l.jsx)(O.A,{className:(0,s.A)("margin-top--sm",R.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,l.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,l.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,l.jsx)(U.A,{tags:a})}),u&&(0,l.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":g}),children:(0,l.jsx)(M,{blogPostTitle:n,to:e.permalink})})]})}function G(e){let{children:t,className:a}=e;const n=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(i,{className:(0,s.A)(n,a),children:[(0,l.jsx)(y,{}),(0,l.jsx)(C,{children:t}),(0,l.jsx)(B,{})]})}},9022:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(4164),s=a(8774),r=a(4848);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return(0,r.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},8046:(e,t,a)=>{a.d(t,{A:()=>d});a(6540);var n=a(4164),s=a(1312),r=a(8774);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(4848);function o(e){let{permalink:t,label:a,count:s,description:o}=e;return(0,i.jsxs)(r.A,{href:t,title:o,className:(0,n.A)(l.tag,s?l.tagWithCount:l.tagRegular),children:[a,s&&(0,i.jsx)("span",{children:s})]})}const c={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,n.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:c.tag,children:(0,i.jsx)(o,{...e})},e.permalink)))})]})}},8506:(e,t,a)=>{a.d(t,{A:()=>c});a(6540);var n=a(7151),s=a(6784),r=a(7107),l=a(7875),i=a(6188),o=a(7897);r.Yv.add(l.Cvc,i.X7I,o.C91);const c={...n.A,Icon:s.g}}}]);