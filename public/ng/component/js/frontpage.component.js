(function (app) {
    //acessar http : ng.http
    app.FrontpageComponent = ng.core.Component({
        selector: 'frontpage',
        templateUrl: '/frontpage/'
    })
    .Class({
        /* Comportamento vinculado à view */
        constructor: function () {
            this.listings = ["Um", "Dois"];
        },
        
        links: function(){
            
        },
        
        news: function(){
            
        },
        
        tutorials: function(){
            
        }        
    });
})(window.app || (window.app = {}));