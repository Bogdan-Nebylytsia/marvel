/*! For license information please see 642.51a14685.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[642],{1948:function(t,r,e){e.d(r,{Z:function(){return i}});var n=e.p+"static/media/error.42292aa12b6bc303ce99.gif",o=e(184),i=function(){return(0,o.jsx)("img",{src:n,alt:"error",style:{margin:"0 auto",background:"none",display:"block",width:"250px",height:"250px",objectFit:"contain"}})}},8458:function(t,r,e){e.r(r),e.d(r,{default:function(){return f}});var n=e(9439),o=e(2791),i=e(2050),a=e(3394),c=e(1948),u=e(7689),s=e(1087),l=e(184),h=function(t){var r=t.comic,e=r.title,n=r.thumbnail,o=r.price,i=r.description,a=r.pageCount,c=r.language;return(0,l.jsxs)("div",{className:"single-comic",children:[(0,l.jsx)("img",{src:n,alt:e,className:"single-comic__img"}),(0,l.jsxs)("div",{className:"single-comic__info",children:[(0,l.jsx)("h2",{className:"single-comic__name",children:e}),(0,l.jsx)("p",{className:"single-comic__descr",children:i}),(0,l.jsx)("p",{className:"single-comic__descr",children:a}),(0,l.jsxs)("p",{className:"single-comic__descr",children:["Language: ",c]}),(0,l.jsx)("div",{className:"single-comic__price",children:o})]}),(0,l.jsx)(s.rU,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})},f=function(){var t=(0,u.UO)().comicId,r=(0,o.useState)({}),e=(0,n.Z)(r,2),s=e[0],f=e[1],p=(0,i.Z)(),d=p.loading,v=p.error,m=p.clearError,g=p.getComic;(0,o.useEffect)((function(){y(),window.scrollTo({top:90,behavior:"smooth"})}),[t]);var y=function(){m(),g(t).then(w)},w=function(t){f(t)},b=v?(0,l.jsx)(c.Z,{}):null,x=d?(0,l.jsx)(a.Z,{}):null,L=v||d||!s?null:(0,l.jsx)(h,{comic:s});return(0,l.jsxs)(l.Fragment,{children:[b,x,L]})}},2050:function(t,r,e){e.d(r,{Z:function(){return c}});var n=e(4165),o=e(5861),i=e(9439),a=e(2791),c=function(){var t="https://gateway.marvel.com:443/v1/public/",r="apikey=6fd4c27ab8f0c4a825d883b3b3700407",e=function(){var t=(0,a.useState)(!1),r=(0,i.Z)(t,2),e=r[0],c=r[1],u=(0,a.useState)(null),s=(0,i.Z)(u,2),l=s[0],h=s[1],f=(0,a.useCallback)(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o,i,a,u,s=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,i=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},c(!0),t.prev=4,t.next=7,fetch(r,{method:e,headers:i,body:o});case 7:if((a=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(a.status));case 10:return t.next=12,a.json();case 12:return u=t.sent,c(!1),t.abrupt("return",u);case 17:throw t.prev=17,t.t0=t.catch(4),c(!1),h(!0),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(r){return t.apply(this,arguments)}}(),[]);return{loading:e,error:l,request:f,clearError:(0,a.useCallback)((function(){return h(null)}),[])}}(),c=e.loading,u=e.error,s=e.clearError,l=e.request,h=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o,i,a=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,l("".concat(t,"characters?limit=9&offset=").concat(o,"&").concat(r));case 3:return i=e.sent,e.abrupt("return",i.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(o){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("".concat(t,"characters/").concat(o,"?").concat(r));case 2:return i=e.sent,e.abrupt("return",m(i.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o,i,a=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,l("".concat(t,"comics?orderBy=issueNumber&offset=").concat(o,"&limit=8&").concat(r));case 3:return i=e.sent,e.abrupt("return",i.data.results.map(v));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(o){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("".concat(t,"comics/").concat(o,"?").concat(r));case 2:return i=e.sent,e.abrupt("return",g(i.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(t){return{id:t.id,title:t.title,thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"NOT AVAILABLE"}},m=function(t){var r=t.description?t.description.length>210?"".concat(t.description.substring(0,210),"..."):t.description:"Unfortunately, there is no description about this character...";return{id:t.id,name:t.name,description:r,thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},g=function(t){return{id:t.id,title:t.title,thumbnail:"".concat(t.thumbnail.path,".").concat(t.thumbnail.extension),price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"NOT AVAILABLE",description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," pages"):"No information about the number of pages",language:t.textObjects[0]?t.textObjects[0].language:"en-us"}};return{loading:c,error:u,clearError:s,getAllCharacters:h,getCharacter:f,getAllComics:p,getComic:d}}},5861:function(t,r,e){function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(r,{Z:function(){return o}})},4165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(1002);function o(){o=function(){return r};var t,r={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),c=new A(n||[]);return a(i,"_invoke",{value:N(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var d="suspendedStart",v="suspendedYield",m="executing",g="completed",y={};function w(){}function b(){}function x(){}var L={};h(L,u,(function(){return this}));var j=Object.getPrototypeOf,E=j&&j(j(G([])));E&&E!==e&&i.call(E,u)&&(L=E);var _=x.prototype=w.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function Z(t,r){function e(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&i.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}})}function N(r,e,n){var o=d;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function C(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[u];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError((0,n.Z)(r)+" is not iterable")}return b.prototype=x,a(_,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=h(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},r.awrap=function(t){return{__await:t}},k(Z.prototype),h(Z.prototype,s,(function(){return this})),r.AsyncIterator=Z,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new Z(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(_),h(_,l,"Generator"),h(_,u,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,A.prototype={constructor:A,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}}}]);
//# sourceMappingURL=642.51a14685.chunk.js.map