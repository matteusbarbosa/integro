import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'frontpage',
    templateUrl: '/frontpage',
    viewProviders: [HTTP_PROVIDERS, FORM_DIRECTIVES],
    directives: [NgFor, NgIf]
})

export class FrontpageComponent {

    searchresults = {}
    http
    
    constructor(@Inject(Http) http: Http) {

        //this.http = http;
    }

    add() { }
    remove() { }
}