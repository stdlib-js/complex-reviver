// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs";var i={Complex128:t,Complex64:s},m=e.isPrimitive,r=i;var n=function(e,t){var s;return t&&t.type&&m(t.re)&&m(t.im)&&(s=r[t.type])?new s(t.re,t.im):t};export{n as default};
//# sourceMappingURL=index.mjs.map
