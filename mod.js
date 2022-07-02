// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,a=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(t,r,e){var n,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||f.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t},p=n,y=l,v=e()?p:y;var b=function(t,r,e){v(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},s=b,d=/./;var m=function(t){return"boolean"==typeof t};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return j&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,w=g;var O=function(t){return w.call(t)},h=Object.prototype.hasOwnProperty;var S=function(t,r){return null!=t&&h.call(t,r)},P="function"==typeof Symbol?Symbol.toStringTag:"",E=S,A=P,T=g;var x=O,B=function(t){var r,e,n;if(null==t)return T.call(t);e=t[A],r=E(t,A);try{t[A]=void 0}catch(r){return T.call(t)}return n=T.call(t),r?t[A]=e:delete t[A],n},V=_()?B:x,F=Boolean.prototype.toString;var N=V,k=function(t){try{return F.call(t),!0}catch(t){return!1}},G=_();var C=function(t){return"object"==typeof t&&(t instanceof Boolean||(G?k(t):"[object Boolean]"===N(t)))},L=m,M=C;var R=s,X=function(t){return L(t)||M(t)},z=C;R(X,"isPrimitive",m),R(X,"isObject",z);var D=X;var I=function(){return new Function("return this;")()},U="object"==typeof self?self:null,q="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof H?H:null;module.exports=J;var K=D.isPrimitive,Q=I,W=U,Y=q,Z=t(Object.freeze({__proto__:null}));var $=function(t){if(arguments.length){if(!K(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Q()}if(W)return W;if(Y)return Y;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},tt=$(),rt=tt.document&&tt.document.childNodes,et=Int8Array,nt=d,ot=rt,ut=et;var it=function(){return"function"==typeof nt||"object"==typeof ut||"function"==typeof ot};var ct=function(){return/^\s*function\s*([^(]*)/i},at=ct;s(at,"REGEXP",ct());var ft=at,lt=V;var pt=Array.isArray?Array.isArray:function(t){return"[object Array]"===lt(t)},yt=pt;var vt=function(t){return null!==t&&"object"==typeof t};s(vt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!yt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(vt));var bt=vt;var st=V,dt=ft.REGEXP,mt=function(t){return bt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var jt=function(t){var r,e,n;if(("Object"===(e=st(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=dt.exec(n.toString()))return r[1]}return mt(t)?"Buffer":e},_t=jt;var gt=jt;var wt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?_t(t).toLowerCase():r},Ot=function(t){return gt(t).toLowerCase()},ht=it()?Ot:wt;var St=function(t){return"function"===ht(t)},Pt=St;var Et=function(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&Pt(t.next)};var At=function(t){return"number"==typeof t},Tt=Number,xt=Tt.prototype.toString;var Bt=V,Vt=Tt,Ft=function(t){try{return xt.call(t),!0}catch(t){return!1}},Nt=_();var kt=function(t){return"object"==typeof t&&(t instanceof Vt||(Nt?Ft(t):"[object Number]"===Bt(t)))},Gt=At,Ct=kt;var Lt=s,Mt=function(t){return Gt(t)||Ct(t)},Rt=kt;Lt(Mt,"isPrimitive",At),Lt(Mt,"isObject",Rt);var Xt=Mt,zt=S;var Dt=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&zt(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,It=pt;var Ut=function(t){return"object"==typeof t&&null!==t&&!It(t)},qt=Object.getPrototypeOf;var Ht=function(t){return t.__proto__},Jt=V,Kt=Ht;var Qt=function(t){var r=Kt(t);return r||null===r?r:"[object Function]"===Jt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Wt=qt,Yt=Qt,Zt=St(Object.getPrototypeOf)?Wt:Yt;var $t=Ut,tr=St,rr=function(t){return null==t?null:(t=Object(t),Zt(t))},er=S,nr=V,or=Object.prototype;var ur=function(t){var r;return!!$t(t)&&(!(r=rr(t))||!er(t,"constructor")&&er(r,"constructor")&&tr(r.constructor)&&"[object Function]"===nr(r.constructor)&&er(r,"isPrototypeOf")&&tr(r.isPrototypeOf)&&(r===or||function(t){var r;for(r in t)if(!er(t,r))return!1;return!0}(t)))},ir=ur,cr=S;var ar=s,fr=St,lr=Et,pr=Xt.isPrimitive,yr=Dt,vr=function(t,r){return ir(r)?(cr(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")};var br=function t(r,e,n){var o,u,i,c;if(!lr(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!fr(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(o={invalid:NaN},arguments.length>2&&(i=vr(o,n)))throw i;return ar(u={},"next",a),ar(u,"return",f),yr&&fr(r[yr])&&ar(u,yr,l),u;function a(){var t;return c?{done:!0}:(t=r.next()).done?(c=!0,t):{value:pr(t.value)?e(t.value):o.invalid,done:!1}}function f(t){return c=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return t(r[yr](),e,o)}},sr=br;var dr=function(t){return 1/t};function mr(t){return sr(t,dr)}export{mr as default};
//# sourceMappingURL=mod.js.map
