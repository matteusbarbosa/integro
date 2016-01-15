import {Injectable, Injector} from 'angular2/core';

(function (app) {

    app.WarningsListComponent = ng.core.Component({
        selector: 'warnings',
        templateUrl: '/warning/list'
    })
            .Class({
                /* Comportamento vinculado à view */
                /* constructor: function (title, details, url, timecreated, timevalid) {
                    
                    this.title = title;
                    this.details = details;
                    this.url = url;
                    this.timecreated = timecreated;
                    this.timevalid = timevalid;
                    
                }, */
                
                constructor: function () {
                    
              
                    
                },
                
                search: function (http) {
                    
                    console.log(this.http);
                    
                    this.searchresults = http.get('/warning/search/a').then(function successCallback(response){
                        console.log(response);
                    }, function errorCallback(response){
                        console.log(response);
                    });
                    
                    console.log(this.searchresults);
                    
                    
                }
            });

})(window.app || (window.app = {}));