"use strict";(self.webpackChunkreplica_io=self.webpackChunkreplica_io||[]).push([[711],{9331:(e,r,a)=>{a.r(r),a.d(r,{default:()=>o});a(6540);var s=a(8774),t=a(1312),i=a(1003),c=a(3995),l=a(1107),n=a(4848);function h(e){let{year:r,posts:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{as:"h3",id:r,children:r}),(0,n.jsx)("ul",{children:a.map((e=>(0,n.jsx)("li",{children:(0,n.jsxs)(s.A,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:r}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(h,{...e})},r)))})})})}function o(e){let{archive:r}=e;const a=(0,t.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),s=(0,t.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const r=e.reduce(((e,r)=>{const a=r.metadata.date.split("-")[0],s=e.get(a)??[];return e.set(a,[r,...s])}),new Map);return Array.from(r,(e=>{let[r,a]=e;return{year:r,posts:a}}))}(r.blogPosts);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.be,{title:a,description:s}),(0,n.jsxs)(c.A,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.A,{as:"h1",className:"hero__title",children:a}),(0,n.jsx)("p",{className:"hero__subtitle",children:s})]})}),(0,n.jsx)("main",{children:h.length>0&&(0,n.jsx)(d,{years:h})})]})]})}}}]);