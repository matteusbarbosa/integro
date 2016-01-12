(function(app) {
	/* Componente visual AppComponent */
app.AppComponent = ng.core.Component({
	selector : 'integro',
	template : '<h1>Primeiro app com angular 2'
})
.Class({
	/* Comportamento vinculado à view */
	constructor : function(){}
});
})(window.app || (window.app = {}));

//buscar AppComponent
//ng.platform.browser.bootstrap(app.AppComponent);

/* 
AppComponent será instanciado sempre na 
presença de ng-app="integro", pela sinalização
do seletor "selector". */