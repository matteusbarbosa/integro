import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'examination',
	templateUrl: '/examination/list',
	viewProviders: [HTTP_PROVIDERS, FORM_DIRECTIVES],
	directives: [NgFor, NgIf]
})

export class ExaminationComponent {

	searchresults = {}
	searchquery
	searchlastquery
    http

	constructor(@Inject(Http) http:Http){
		this.http = http;
	}

	search() {
		
		this.http.get('examination/search/' + this.searchquery).subscribe(res => {

        this.searchresults = res.json();

        this.searchlastquery = this.searchquery;

		});

		return this.searchresults;

    }

}