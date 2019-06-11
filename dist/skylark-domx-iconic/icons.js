/**
 * skylark-domx-iconic - The skylark domx iconic library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-utils-dom/dom","skylark-utils-dom/styler"],function(e,s){return e.icons={icon:function(e,s){var t=[],n=langx.clone(s);s.type&&(t.push("fa-"+s.type),delete n.type),s.size&&(size.indexOf(s.size)>-1?t.push("fa-"+s.size):n["font-size"]=s.size,delete n.size),s.fw&&(t.push("fa-fw"),delete n.fw),s.spin&&(t.push("fa-spin"),delete n.spin),s.border&&(t.push("fa-border"),delete n.border),s.angle&&(t.push("fa-rotate-"+s.angle),delete n.angle),styler.addClass(e,t),styler.css(e,n)},stack:function(e,s){}}});
//# sourceMappingURL=sourcemaps/icons.js.map
