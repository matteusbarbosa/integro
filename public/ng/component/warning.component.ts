import {Component, Injectable, Injector} from '/angular2/core.js';
import {HTTP_PROVIDERS, Http} from '/angular2/http.js';

@Component({
	selector : 'warnings',
	viewProviders: [HTTP_PROVIDERS],
	templateUrl: '/warning/list'
})


export class WarningComponent {

	constructor(http:Http){
		console.log(http);
	}




}