import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
	inputs: ['isBound'],
	selector: 'examination',
	templateUrl: '/examination/list',
	viewProviders: [HTTP_PROVIDERS, FORM_DIRECTIVES],
	directives: [NgFor, NgIf, NgClass]
})

export class ExaminationComponent {

	searchresults = {}
	searchquery
	searchlastquery
	http
	isBound = true

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

	bind(examination_id) {

		this.http.get('examination/bind/' + examination_id).subscribe(res => {

			this.result = res.json();

		});
	}

	unlink(examination_id) {

		this.http.get('examination/unlink/' + examination_id).subscribe(res => {

			this.result = res.json();

		});
	}
}