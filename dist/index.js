"use strict";var t=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var o=t(function(y,s){
var c=require('@stdlib/complex-float64/dist'),n=require('@stdlib/complex-float32/dist'),q={Complex128:c,Complex64:n};s.exports=q
});var x=t(function(a,p){
var m=require('@stdlib/assert-is-number/dist').isPrimitive,u=o();function C(i,r){var e;return r&&r.type&&m(r.re)&&m(r.im)&&(e=u[r.type],e)?new e(r.re,r.im):r}p.exports=C
});var f=x();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
