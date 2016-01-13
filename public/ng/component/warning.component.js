(function(app) {

	app.WarningsListComponent = ng.core.Component({
		selector : 'warnings',
	})
	.Class({
		/* Comportamento vinculado à view */
		constructor : function(){
			this.listings = ["Um", "Dois"];
		}
	});

	app.WarningsListComponent.annotations = [

	new ng.core.ComponentAnnotation({
		selector: "warnings"
	}),

	new ng.core.ViewAnnotation({
		directives : [ng.ngFor],
		template : '<h1>Componente warnings</h1>'
	})

	];

})(window.app || (window.app = {}));