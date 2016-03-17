

var $ = jQuery = function() {
	return jQuery.fn.init();
};


global.$ = $;


jQuery.fn = jQuery.prototype = {
	//扩展的原型对象
	jquery : '1.7.2',

	init : function() {
		log('>>>', this)
		return this;
	},

	size : function() {
		return this.length;
	}

}


var log = console.log;


var new$ = new $();


log(new$.size())