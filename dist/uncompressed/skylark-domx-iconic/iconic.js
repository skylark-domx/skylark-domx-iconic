define([
	"skylark-langx/skylark",
	"skylark-domx-styler"
],function(skylark,stylers){
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

	return skylark.attach("domx.iconic", {
		icon : icon,
		stack : stack
	});
});
