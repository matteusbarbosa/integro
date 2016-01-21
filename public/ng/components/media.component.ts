import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'media',
    templateUrl: '/media/list',
    viewProviders: [HTTP_PROVIDERS, FORM_DIRECTIVES],
    directives: [NgFor, NgIf]
})

export class MediaComponent {
    
    searchresults = {}
    searchquery
    searchlastquery
    http
    
    constructor(@Inject(Http) http: Http) {
        
        this.http = http;
    }

    search() {

            this.searchlastquery = this.searchquery;
                   
            this.http.get('media/search/'+this.searchquery).subscribe(res => {

            this.searchresults = res.json();

            this.searchlastquery = this.searchresults > 0 ? this.searchquery : null;

            });
            
            return this.searchresults;

    }
    add() { }
    remove() { }
}