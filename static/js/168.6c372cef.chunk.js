"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n=t(861),a=t(885),c=t(757),s=t.n(c),o=t(791),u=t(689),i=t(508),f={reviewsItem:"Reviews_reviewsItem__Su53A",reviewsName:"Reviews_reviewsName__Dzz-A",reviewsText:"Reviews_reviewsText__pIre-"},v=t(184),p=function(){var e=(0,o.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],p=(0,u.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(null),e.prev=1,e.next=4,(0,i.tx)(p);case 4:r=e.sent,c(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[p]),t&&0===t.length?(0,v.jsx)("p",{className:f.detailsMessage,children:"We don't have any reviews for this movie"}):(0,v.jsx)("div",{children:null===t||void 0===t?void 0:t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,v.jsxs)("li",{className:f.reviewsItem,children:[(0,v.jsxs)("p",{className:f.reviewsName,children:["Author ",t]}),(0,v.jsx)("p",{className:f.reviewsText,children:n})]},r)}))})}},508:function(e,r,t){t.d(r,{SU:function(){return i},bI:function(){return f},l2:function(){return v},tx:function(){return h},zv:function(){return p}});var n=t(861),a=t(757),c=t.n(a),s=t(44),o="ffa446ff4e98eda704f81d136e56b989",u="https://api.themoviedb.org/3/",i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("".concat(u,"trending/movie/day?api_key=").concat(o));case 2:if(200===(r=e.sent).status){e.next=5;break}throw new Error("Error, nothing found");case 5:return e.abrupt("return",r.data.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("".concat(u,"search/movie?api_key=").concat(o,"&page=1&query=").concat(r));case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Error, nothing found");case 5:return console.log(t.data),e.abrupt("return",t.data.results);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("".concat(u,"movie/").concat(r,"?api_key=").concat(o));case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Error, nothing found");case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("".concat(u,"movie/").concat(r,"/credits?api_key=").concat(o));case 2:if(t=e.sent,console.log(t),200===t.status){e.next=6;break}throw new Error("Error, nothing found");case 6:return e.abrupt("return",t.data.cast);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.ZP.get("".concat(u,"movie/").concat(r,"/reviews?api_key=").concat(o));case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Error, nothing found");case 5:return e.abrupt("return",t.data.results);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.6c372cef.chunk.js.map