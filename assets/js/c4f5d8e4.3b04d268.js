"use strict";(self.webpackChunkreplica_io=self.webpackChunkreplica_io||[]).push([[634],{3027:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(8774),c=n(4586),o=n(781),r=n(4164),l=n(6540),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},i.apply(this,arguments)};var s=l.forwardRef((function(e,t){var n=l.useState(!1),a=n[0],c=n[1],o=l.useState(!1),r=o[0],s=o[1],u=encodeURIComponent(e.id),m="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,d=e.poster||"hqdefault",h="&".concat(e.params)||0,b=e.muted?"&mute=1":"",f=e.announce||"Watch",g=e.webp?"webp":"jpg",y=e.webp?"vi_webp":"vi",w=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(y,"/").concat(m,"/").concat(d,".").concat(g):"https://i.ytimg.com/".concat(y,"/").concat(u,"/").concat(d,".").concat(g)),v=e.noCookie;v=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var x=e.playlist?"".concat(v,"/embed/videoseries?autoplay=1").concat(b,"&list=").concat(u).concat(h):"".concat(v,"/embed/").concat(u,"?autoplay=1&state=1").concat(b).concat(h),j=e.activatedClass||"lyt-activated",k=e.adNetwork||!1,C=e.aspectHeight||9,E=e.aspectWidth||16,N=e.iframeClass||"",_=e.playerClass||"lty-playbtn",A=e.wrapperClass||"yt-lite",I=e.onIframeAdded||function(){},F=e.rel?"prefetch":"preload",O=e.containerElement||"article";return l.useEffect((function(){r&&I()}),[r]),l.createElement(l.Fragment,null,l.createElement("link",{rel:F,href:w,as:"image"}),l.createElement(l.Fragment,null,a&&l.createElement(l.Fragment,null,l.createElement("link",{rel:"preconnect",href:v}),l.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),k&&l.createElement(l.Fragment,null,l.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),l.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),l.createElement(O,{onPointerOver:function(){a||c(!0)},onClick:function(){r||s(!0)},className:"".concat(A," ").concat(r?j:""),"data-title":p,style:i({backgroundImage:"url(".concat(w,")")},{"--aspect-ratio":"".concat(C/E*100,"%")})},l.createElement("button",{type:"button",className:_,"aria-label":"".concat(f," ").concat(p)}),r&&l.createElement("iframe",{ref:t,className:N,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:x})))})),u=n(1107);const m={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var p=n(4848);function d(){const{siteConfig:e}=(0,c.A)();return(0,p.jsx)("header",{className:(0,r.A)("hero",m.heroBanner),children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("img",{src:"img/logo.svg",alt:"Replica_IO Logo",width:"240px"}),(0,p.jsx)(u.A,{as:"h1",className:"hero__title",children:e.title}),(0,p.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,p.jsxs)("div",{className:m.buttons,children:[(0,p.jsx)(a.A,{className:"button button--primary button--lg",to:"/about",children:"About"}),(0,p.jsx)(a.A,{className:"button button--primary button--lg",to:e.customFields.gitHubUrl,children:"Go to GitHub"})]})]})})}function h(){const{siteConfig:e}=(0,c.A)();return(0,p.jsxs)(o.A,{description:e.customFields.description,children:[(0,p.jsx)(d,{}),(0,p.jsx)("main",{children:(0,p.jsx)("div",{className:"container container--fluid margin-vert--xl",children:(0,p.jsx)("div",{className:"video-container",style:{maxWidth:"1280px"},children:(0,p.jsx)(s,{id:"oJlryr6bMCo",title:"Introduction to Replica_IO"})})})})]})}}}]);