import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
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
	isBound

	constructor(@Inject(Http) http:Http){
		this.http = http;
	}

	list(discipline_id: number) {

		this.http.get('examination/list/' + this.searchquery).subscribe(res => {

			this.list = res.json();

		});

	}

	search() {
		
		this.http.get('examination/search/' + this.searchquery).subscribe(res => {

			this.searchresults = res.json();

			this.searchlastquery = this.searchquery;

		});

	}

	bind(examination_id : number) {

		console.log(examination_id);

		this.http.get('examination/bind/' + examination_id).subscribe(res => {

			this.result = res.json();

			console.log(isBound);

		});
	}

	unlink(examination_id : number) {

		this.http.get('examination/unlink/' + examination_id).subscribe(res => {

			this.result = res.json();

			console.log(isBound);

		});

		return true;
	}
}