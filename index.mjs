// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.0.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@v0.0.2-esm/index.mjs";var r={Complex128:t,Complex64:s};function m(t,s){var m;return s&&s.type&&e(s.re)&&e(s.im)&&(m=r[s.type])?new m(s.re,s.im):s}export{m as default};
//# sourceMappingURL=index.mjs.map
