parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,c=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(c)throw o}}}}function t(e){return o(e)||a(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}for(var c=[[],[],[],[]],u=document.querySelector(".button"),s="field-cell",f=document.querySelector(".game-score"),l=document.querySelector(".game-header"),d=t(document.querySelector("tbody").children).map(function(e){return t(e.children)}),m=0;m<4;m++)for(var v=0;v<4;v++)c[v].push(d[m][v]);function y(e,t){var n=e-.5+Math.random()*(t-e+1);return Math.round(n)}function h(e){var t=y(0,e.length-1),n=10===y(1,10)?4:2;e[t].innerHTML="".concat(n),e[t].classList.add("".concat(s,"--").concat(n)),e.splice(t,1)}function p(){var t,n=e(document.querySelectorAll(".message"));try{for(n.s();!(t=n.n()).done;){var r=t.value;r.classList.contains("hidden")||r.classList.add("hidden")}}catch(a){n.e(a)}finally{n.f()}}function T(e){e.classList.remove(e.classList[1]),e.innerHTML=""}function b(e,t){T(e),e.classList.add("".concat(s,"--").concat(t)),e.innerText="".concat(t)}function L(t){var n,r=e(t);try{for(r.s();!(n=r.n()).done;)for(var a=n.value,o=2;o>=0;o--)if(a[o+1].innerText===a[o].innerText&&""!==a[o].innerText)return!0}catch(i){r.e(i)}finally{r.f()}return!1}function S(e){for(var t=2;t>=0;t--)if(e[t+1].innerText===e[t].innerText&&""!==e[t].innerText){var n=2*Number(e[t].innerText);2048===n&&(l.dataset.value="off",document.querySelector(".message-win").classList.remove("hidden")),f.innerText="".concat(Number(f.innerText)+n),T(e[t]),b(e[t+1],n),e[t].dataset.status="block"}}function x(e,n){var r=t(document.querySelectorAll("td")).filter(function(e){return 1===e.classList.length});0!==r.length?JSON.stringify(e)!==JSON.stringify(n)&&h(r):L(c)||L(d)||document.querySelector(".message-lose").classList.remove("hidden")}function g(e){for(var t=3;t>=0;t--)if(e[t].innerText)for(var n=t+1;n<e.length;n++)if(!e[n].innerText){var r=e[n-1].innerText;T(e[n-1]),b(e[n],r)}S(e),document.querySelector("[data-status]")&&document.querySelector("[data-status]").removeAttribute("data-status")}l.dataset.value="off",u.addEventListener("click",function(n){var r=t(document.querySelectorAll(".".concat(s)));if(u.classList.contains("start"))return u.classList.remove("start"),u.classList.add("restart"),p(),u.innerHTML="Restart",h(r),h(r),void(l.dataset.value="on");if(u.classList.contains("restart")){u.classList.remove("restart"),u.classList.add("start"),u.innerHTML="Start";var a,o=e(r);try{for(o.s();!(a=o.n()).done;){var i=a.value;i.className=s,i.innerHTML=""}}catch(c){o.e(c)}finally{o.f()}return p(),l.dataset.value="off",document.querySelector(".message-start").classList.remove("hidden"),void(f.innerText="0")}}),addEventListener("keydown",function(n){if("on"===l.dataset.value){var r=[];switch(n.key){case"ArrowLeft":r=d.map(function(e){return e.map(function(e){return e.innerText})});var a,o=e(d);try{for(o.s();!(a=o.n()).done;){g(t(a.value).reverse())}}catch(y){o.e(y)}finally{o.f()}x(r,d.map(function(e){return e.map(function(e){return e.innerText})}));break;case"ArrowRight":r=d.map(function(e){return e.map(function(e){return e.innerText})});var i,u=e(d);try{for(u.s();!(i=u.n()).done;){g(i.value)}}catch(y){u.e(y)}finally{u.f()}x(r,d.map(function(e){return e.map(function(e){return e.innerText})}));break;case"ArrowUp":r=c.map(function(e){return e.map(function(e){return e.innerText})});var s,f=e(c);try{for(f.s();!(s=f.n()).done;){g(t(s.value).reverse())}}catch(y){f.e(y)}finally{f.f()}x(r,c.map(function(e){return e.map(function(e){return e.innerText})}));break;case"ArrowDown":r=c.map(function(e){return e.map(function(e){return e.innerText})});var m,v=e(c);try{for(v.s();!(m=v.n()).done;){g(m.value)}}catch(y){v.e(y)}finally{v.f()}x(r,c.map(function(e){return e.map(function(e){return e.innerText})}))}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e2ff34b7.js.map