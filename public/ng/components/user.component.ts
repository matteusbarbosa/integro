import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'user',
	templateUrl: '/user/list',
	viewProviders: [HTTP_PROVIDERS, FORM_DIRECTIVES],
	directives: [NgFor, NgIf]
})

export class UserComponent {

	searchresults = {}
	searchquery
	searchlastquery
    http
    userid

	constructor( @Inject(Http) http: Http) {
		this.http = http;
	}

	search() {

		this.http.get('user/search/' + this.searchquery).subscribe(res => {

			this.searchresults = res.json();

			this.searchlastquery = this.searchquery;

		});

		return this.searchresults;
    }


    /*
    Entregue dados do perfil do usuário especificado
    */
    profile() {

		this.http.get('user/profile/' + this.userid).subscribe(res => {

			this.searchresults = res.json();

			this.searchlastquery = this.searchquery;

		});

		return this.searchresults;

    }
}