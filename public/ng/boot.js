(function(app){
	document.addEventListener('DOMContentLoaded', function(){
		/* Carregue a aplicação no navegador, com o componente na raíz */
		ng.platform.browser.bootstrap(app.Component);
	});
})(window.app || (window.app = {}));