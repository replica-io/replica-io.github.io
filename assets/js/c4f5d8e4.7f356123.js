"use strict";(self.webpackChunkreplica_io=self.webpackChunkreplica_io||[]).push([[195],{2616:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(9960),l=a(2263),r=a(7961),o=a(6010),c=a(7294),i=function(){return i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},i.apply(this,arguments)};function s(e){var t=c.useState(!1),a=t[0],n=t[1],l=c.useState(!1),r=l[0],o=l[1],s=encodeURIComponent(e.id),m="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,u=e.title,p=e.poster||"hqdefault",d="&"+e.params||0,h=e.muted?"&mute=1":"",b=e.announce||"Watch",g=e.webp?"webp":"jpg",f=e.webp?"vi_webp":"vi",y=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+f+"/"+m+"/"+p+"."+g:"https://i.ytimg.com/"+f+"/"+s+"/"+p+"."+g),E=e.noCookie;E=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var w=e.playlist?E+"/embed/videoseries?autoplay=1"+h+"&list="+s+d:E+"/embed/"+s+"?autoplay=1&state=1"+h+d,v=e.activatedClass||"lyt-activated",k=e.adNetwork||!1,C=e.aspectHeight||9,N=e.aspectWidth||16,_=e.iframeClass||"",I=e.playerClass||"lty-playbtn",F=e.wrapperClass||"yt-lite",O=e.onIframeAdded||function(){},Z=e.rel?"prefetch":"preload";return c.useEffect((function(){r&&O()}),[r]),c.createElement(c.Fragment,null,c.createElement("link",{rel:Z,href:y,as:"image"}),c.createElement(c.Fragment,null,a&&c.createElement(c.Fragment,null,c.createElement("link",{rel:"preconnect",href:E}),c.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),k&&c.createElement(c.Fragment,null,c.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),c.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),c.createElement("article",{onPointerOver:function(){a||n(!0)},onClick:function(){r||o(!0)},className:F+" "+(r?v:""),"data-title":u,style:i({backgroundImage:"url("+y+")"},{"--aspect-ratio":C/N*100+"%"})},c.createElement("button",{type:"button",className:I,"aria-label":b+" "+u}),r&&c.createElement("iframe",{className:_,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:w})))}const m={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function u(){const{siteConfig:e}=(0,l.Z)();return c.createElement("header",{className:(0,o.Z)("hero",m.heroBanner)},c.createElement("div",{className:"container"},c.createElement("img",{src:"img/logo.svg",alt:"Replica_IO Logo",width:"240px"}),c.createElement("h1",{className:"hero__title"},e.title),c.createElement("p",{className:"hero__subtitle"},e.tagline),c.createElement("div",{className:m.buttons},c.createElement(n.Z,{className:"button button--primary button--lg",to:"/about"},"About"),c.createElement(n.Z,{className:"button button--primary button--lg",to:e.customFields.gitHubUrl},"Go to GitHub"))))}function p(){const{siteConfig:e}=(0,l.Z)();return c.createElement(r.Z,{description:e.customFields.description},c.createElement(u,null),c.createElement("main",null,c.createElement("div",{className:"container container--fluid margin-vert--xl"},c.createElement("div",{className:"video-container",style:{maxWidth:"1280px"}},c.createElement(s,{id:"oJlryr6bMCo",title:"Introduction to Replica_IO"})))))}}}]);