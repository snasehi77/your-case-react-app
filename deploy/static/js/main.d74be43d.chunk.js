(this.webpackJsonplanding=this.webpackJsonplanding||[]).push([[0],{125:function(e,n,t){"use strict";t.r(n);var o=t(2),a=t.n(o),r=t(48),c=t.n(r),s=(t(58),t(49)),i=t.n(s),l=(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ENVIRONMENT,"https://dev-ngn.mrreset.com"),u=t(52),m=Object(u.a)(),f=i.a.create({baseURL:l,headers:{Authorization:"Bearer "+localStorage.getItem("token")}});function h(e){(function(e,n){return f.post(e,n).then((function(e){return e.data})).catch((function(e){console.error(e.message)}))})("login",e).then((function(e){var n;e&&e.token&&(localStorage.setItem("token",e.token),n=e.token,f.defaults.headers={Authorization:"Bearer "+n})}))}f.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),f.interceptors.response.use((function(e){return e}),(function(e){return console.log(e),m.push("/"),Promise.reject(e)}));t(75);var g=t(50),p=t(51),d=function(){var e=(new Date).getFullYear();return a.a.createElement("div",{className:"bg-primary vh-100 bkg-p-auto d-flex align-items-center"},a.a.createElement("h4",{className:"your-case-logo font-weight-bold cl-white"},a.a.createElement(g.a,{icon:p.a,className:"mr-1"}),"YourCase"),a.a.createElement("p",{className:"bkg-coming-soon p-0 m-0"},"Coming Soon."),a.a.createElement("p",{className:"bkg-inc"},a.a.createElement("small",{className:"white-opacity"},a.a.createElement("i",{className:"fa fa-copyright"},"\xa0"),e," Your Case Inc.")))},E=function(){return Object(o.useEffect)((function(){h({username:"hans@allcode.com",password:"wpwd"})}),[]),a.a.createElement(d,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(80),t(124);c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,n,t){e.exports=t(125)},58:function(e,n,t){},75:function(e,n,t){},93:function(e,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.d74be43d.chunk.js.map