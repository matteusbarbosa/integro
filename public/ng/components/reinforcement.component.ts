import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'reinforcement',
	templateUrl: '/reinforcement/list',
	viewProviders: [HTTP_PROVIDERS, FORM_DIRECTIVES],
	directives: [NgFor, NgIf]
})

export class ReinforcementComponent {

	searchresults = {}
	searchquery
	searchlastquery
    http

	constructor(@Inject(Http) http:Http){
		this.http = http;
	}

	search() {
		
		this.http.get('reinforcement/search/' + this.searchquery).subscribe(res => {

        this.searchresults = res.json();

        this.searchlastquery = this.searchquery;

		});

		return this.searchresults;

    }

	bind(reinforcement_id) {

		this.http.get('reinforcement/bind/' + reinforcement_id).subscribe(res => {

			this.result = res.json();

		});
	}

	unlink(reinforcement_id) {

		this.http.get('reinforcement/unlink/' + reinforcement_id).subscribe(res => {

			this.result = res.json();

		});
	}

}