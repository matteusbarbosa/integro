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
	http

	constructor(@Inject(Http) http:Http){
		
	}
}