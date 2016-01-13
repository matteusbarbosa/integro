(function(app) {
	app.FrontpageComponent = ng.core.Component({
		selector : 'frontpage',
		template : '<h1>Componente frontpage</h1>'
	})
	.Class({
		/* Comportamento vinculado à view */
		constructor : function(){
			this.listings = ["Um", "Dois"];
		}
	});

})(window.app || (window.app = {}));