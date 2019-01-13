/**
 * skylark-utils-debug - The skylark debug utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                exports: null
            };
            require(id);
        } else {
            map[id] = factory;
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.exports) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args);
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx/skylark");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-utils-debug/icons',[
	"skylark-utils-dom/dom",
	"skylark-utils-dom/styler"
],function(dom,stylers){
	var sizes = ["xs","sm","lg","2x","3x","4x","5x","6x","7x","8x","9x",,"10x"];
	/*
	 * @param options
	 *   - {String} type ex: "download"
	 *   - {String} size ex: "2x"
	 *   - {String} color ex: "download"
	 *   - {Boolean} fw
	 *   - {Number} angle
	 */
	function icon(el,options) {
		var classes = [],
			styles = langx.clone(options);
		if (options.type) {
			classes.push("fa-" + options.type);
			delete styles.type;
		}
		if (options.size) {
			if (size.indexOf(options.size)>-1) {
				classes.push("fa-" + options.size);
			} else {
				styles["font-size"] = options.size;
			}
			delete styles.size;
		}
		if (options.fw) {
			classes.push("fa-fw");
			delete styles.fw;
		}
		if (options.spin) {
			classes.push("fa-spin");
			delete styles.spin;
		}
		if (options.border) {
			classes.push("fa-border");
			delete styles.border;
		}
		if (options.angle) {
			classes.push("fa-rotate-" + options.angle);
			delete styles.angle;
		}
		styler.addClass(el,classes);
		styler.css(el,styles);
	}

	function stack(el,icons) {

	}

	return dom.icons = {
		icon : icon,
		stack : stack
	}
});

define('skylark-utils-debug/main',[
    "./icons",
], function(icons) {

	return icons;
});
define('skylark-utils-debug', ['skylark-utils-debug/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-utils-debug.js.map
