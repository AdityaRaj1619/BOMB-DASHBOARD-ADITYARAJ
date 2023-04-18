/*! For license information please see 5.78a051fc.chunk.js.LICENSE.txt */
(this["webpackJsonpbomb-dashboard-final-task"]=this["webpackJsonpbomb-dashboard-final-task"]||[]).push([[5],{307:function(t,e,r){"use strict";var n=r(1),o=r(327),i=r(94);e.a=function(){var t=Object(o.b)(),e=Object(i.b)();return Object(n.useCallback)((function(r,n){r.then((function(e){return t(e,{summary:n})})).catch((function(t){if(!t.message.includes("User denied")){var r="Unable to ".concat(n[0].toLowerCase()).concat(n.slice(1));console.error("".concat(r,": ").concat(t.message||t.stack)),e({error:{message:r,stack:t.message||t.stack}})}}))}),[e,t])}},332:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n,o=r(42),i=r(1),a=r.n(i),c=r(31).d.div(n||(n=Object(o.a)(["\n  background-color: #363746;\n  font-size: 36px;\n  height: 95px;\n  width: 95px;\n  border-radius: 95px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto ","px;\n"])),(function(t){return t.theme.spacing[3]})),u=function(t){var e=t.children;return a.a.createElement(c,null,e)}},345:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(13),o=r(89),i=r(22),a=r(1),c=r(327),u=r(382);function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};u(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==e&&r.call(m,i)&&(y=m);var b=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e((function(o,a){!function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var l=o.a.constants.MaxUint256,f=i.a.from("1000000000000000000000000"),h=function(t){return t[t.UNKNOWN=0]="UNKNOWN",t[t.NOT_APPROVED=1]="NOT_APPROVED",t[t.PENDING=2]="PENDING",t[t.APPROVED=3]="APPROVED",t}({});e.b=function(t,e){var r=Object(c.a)(t.address,e),o=Object(u.a)(t,e,r),i=Object(a.useMemo)((function(){return o?o.lt(f)?r?h.PENDING:h.NOT_APPROVED:h.APPROVED:h.UNKNOWN}),[o,r]),p=Object(c.b)(),d=Object(a.useCallback)(Object(n.a)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i===h.NOT_APPROVED){r.next=3;break}return console.error("approve was called unnecessarily"),r.abrupt("return");case 3:return r.next=5,t.approve(e,l);case 5:n=r.sent,p(n,{summary:"Approve ".concat(t.symbol),approval:{tokenAddress:t.address,spender:e}});case 7:case"end":return r.stop()}}),r)}))),[i,t,e,p]);return[i,d]}},353:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(1),o=r.n(n),i=r(1401),a=r(438),c=function(){return o.a.createElement(i.a,{style:{textAlign:"center",marginTop:"25px"}},o.a.createElement(a.a,null))}},354:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n,o=r(42),i=r(1),a=r.n(i),c=r(31).d.div(n||(n=Object(o.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))),u=function(t){var e=t.value;return a.a.createElement(c,null,e)}},376:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return f}));var n,o=r(1),i=r.n(o),a=r(31),c=r(42),u=a.d.div(n||(n=Object(c.a)([""]))),s=function(t){var e=t.children;return i.a.createElement(u,null,e)},l=function(t){var e=t.color,r=Object(o.useContext)(a.a).color;return i.a.createElement(s,null,i.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),i.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:e||r.grey[400]})))},f=function(t){var e=t.color,r=Object(o.useContext)(a.a).color;return i.a.createElement(s,null,i.a.createElement("svg",{viewBox:"0 0 24 24",fill:e||r.grey[400],width:"18px",height:"18px"},i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),i.a.createElement("path",{d:"M19 13H5v-2h14v2z"})))}},378:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n,o,i=r(42),a=r(1),c=r.n(a),u=r(31),s=r(174),l=u.d.button(n||(n=Object(i.a)(["\n  align-items: center;\n  border: 2px solid;\n  border-radius: 28px;\n  background-color: #171923;\n  box-shadow: ",";\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",";\n  text-transform: uppercase;\n  width: 56px;\n\n  &:hover {\n    background-color: #f9d749;\n    color: #171923;\n  }\n"])),(function(t){return"rgba(251,221,76,1)"}),(function(t){return t.disabled?"grey":"#f9d749"}),(function(t){return t.disabled?"none":void 0})),f=Object(u.d)(s.b)(o||(o=Object(i.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(t){return-t.theme.spacing[4]}),(function(t){return t.theme.spacing[4]})),h=function(t){var e=t.children,r=t.disabled,n=t.onClick,o=t.to;return c.a.createElement(l,{disabled:r,onClick:n},o?c.a.createElement(f,{to:o},e):e)}},406:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n,o=r(42),i=r(1),a=r.n(i),c=r(31),u=c.d.div(n||(n=Object(o.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(t){return t.size}),(function(t){return t.size})),s=function(t){var e,r=t.size,n=void 0===r?"md":r,o=Object(i.useContext)(c.a).spacing;switch(n){case"lg":e=o[6];break;case"sm":e=o[2];break;case"md":default:e=o[4]}return a.a.createElement(u,{size:e})}},613:function(t,e,r){"use strict";var n=r(13),o=r(28),i=r(1),a=r(171),c=r(39);function u(){u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==e&&r.call(m,i)&&(y=m);var b=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e((function(o,a){!function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),s(b,c,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}e.a=function(t,e){var r=Object(i.useState)("0"),s=Object(o.a)(r,2),l=s[0],f=s[1],h=Object(a.a)(),p=null===h||void 0===h?void 0:h.isUnlocked,d=Object(i.useCallback)(Object(n.a)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,h.getDepositTokenPriceInDollars(t,e);case 2:n=r.sent,f(n);case 4:case"end":return r.stop()}}),r)}))),[e,t,h]);return Object(i.useEffect)((function(){if(p){d().catch((function(t){return console.error(t.stack)}));var t=setInterval(d,c.b.refreshInterval);return function(){return clearInterval(t)}}}),[p,f,h,d]),l}}}]);
//# sourceMappingURL=5.78a051fc.chunk.js.map