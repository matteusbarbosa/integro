(function(app) {

	app.WarningsListComponent = ng.core.Component({
		selector : 'warnings',
                templateUrl : '/warning/list'
	})
	.Class({
		/* Comportamento vinculado à view */
		constructor : function(){
			this.listings = ["Um", "Dois"];
		}
	});
        
})(window.app || (window.app = {}));