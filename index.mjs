// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@v0.2.0-esm/index.mjs";var m={Complex128:t,Complex64:s};function r(t,s){var r;return s&&s.type&&e(s.re)&&e(s.im)&&(r=m[s.type])?new r(s.re,s.im):s}export{r as default};
//# sourceMappingURL=index.mjs.map
