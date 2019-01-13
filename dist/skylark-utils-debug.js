/**
 * skylark-utils-debug - The skylark debug utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,r){var n=r.define,t=r.require,s="function"==typeof n&&n.amd,i=!s&&"undefined"!=typeof exports;if(!s&&!n){var o={};n=r.define=function(e,r,n){"function"==typeof n?(o[e]={factory:n,deps:r.map(function(r){return function(e,r){if("."!==e[0])return e;var n=r.split("/"),t=e.split("/");n.pop();for(var s=0;s<t.length;s++)"."!=t[s]&&(".."==t[s]?n.pop():n.push(t[s]));return n.join("/")}(r,e)}),exports:null},t(e)):o[e]=n},t=r.require=function(e){if(!o.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var n=o[e];if(!n.exports){var s=[];n.deps.forEach(function(e){s.push(t(e))}),n.exports=n.factory.apply(r,s)}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,r){e("skylark-utils-debug/icons",["skylark-utils-dom/dom","skylark-utils-dom/styler"],function(e,r){return e.icons={icon:function(e,r){var n=[],t=langx.clone(r);r.type&&(n.push("fa-"+r.type),delete t.type);r.size&&(size.indexOf(r.size)>-1?n.push("fa-"+r.size):t["font-size"]=r.size,delete t.size);r.fw&&(n.push("fa-fw"),delete t.fw);r.spin&&(n.push("fa-spin"),delete t.spin);r.border&&(n.push("fa-border"),delete t.border);r.angle&&(n.push("fa-rotate-"+r.angle),delete t.angle);styler.addClass(e,n),styler.css(e,t)},stack:function(e,r){}}}),e("skylark-utils-debug/main",["./icons"],function(e){return e}),e("skylark-utils-debug",["skylark-utils-debug/main"],function(e){return e})}(n),!s){var u=t("skylark-langx/skylark");i?module.exports=u:r.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-utils-debug.js.map
