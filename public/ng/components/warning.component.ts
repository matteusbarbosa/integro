import {Component, Injectable, Inject} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
	selector: 'warnings',
	providers: [HTTP_PROVIDERS],
	viewProviders: [HTTP_PROVIDERS],
	templateUrl: '/warning/list',
	directives: [NgFor]    
})

export class WarningsComponent { 

	constructor(@Inject(Http) http: Http){
		this.http = http;
	},

	search(){

		if(this.searchquery.length > 0){
			this.http.get('/warning/search/'+this.searchquery)
			.subscribe(searchresults => this.searchresults = searchresults);
			console.log(this);
		}
	},
	add(){},
	remove(){}
}