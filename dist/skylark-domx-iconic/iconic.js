/**
 * skylark-domx-iconic - The skylark domx iconic library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-domx-styler"],function(e,s){return e.attach("domx.iconic",{icon:function(e,s){var t=[],a=langx.clone(s);s.type&&(t.push("fa-"+s.type),delete a.type),s.size&&(size.indexOf(s.size)>-1?t.push("fa-"+s.size):a["font-size"]=s.size,delete a.size),s.fw&&(t.push("fa-fw"),delete a.fw),s.spin&&(t.push("fa-spin"),delete a.spin),s.border&&(t.push("fa-border"),delete a.border),s.angle&&(t.push("fa-rotate-"+s.angle),delete a.angle),styler.addClass(e,t),styler.css(e,a)},stack:function(e,s){}})});
//# sourceMappingURL=sourcemaps/iconic.js.map
