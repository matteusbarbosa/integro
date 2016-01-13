(function(app){

	document.addEventListener('DOMContentLoaded', function(){
		/* Carregue a aplicação no navegador, com o componente na raíz */
		if(typeof app.AppComponent !== "undefined")
		ng.platform.browser.bootstrap(app.AppComponent);
		if(typeof app.FrontpageComponent !== "undefined")
		ng.platform.browser.bootstrap(app.FrontpageComponent);
		if(typeof app.WarningsListComponent !== "undefined")
		ng.platform.browser.bootstrap(app.WarningsListComponent);
	});
})(window.app || (window.app = {}));