import {Warning} from './Warning';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class WarningService {

	http

	constructor(@Inject(Http) http: Http) {

		this.http = http;
		
	}

	find(query_search : string){

		return this.http.get('warning/search/' + query_search);
	}

	getList(course_id : number) {

		return this.http.get('warning/bycourse/' + course_id);

	}


/*
	getList já relaciona inscritos x disponíveis
	userList(user_id: number) {

		this.http.get('warning/userlist/' + user_id).subscribe(res => {

			this.list_user = res.json();

		});
} */

}