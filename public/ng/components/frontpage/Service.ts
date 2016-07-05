import {Frontpage} from './Frontpage';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class FrontpageService {

	http

	constructor(@Inject(Http) http: Http) {

		this.http = http;
		
	}

	getList(course_id : number) {

		return this.http.get('api/frontpage/bycourse/' + course_id);

	}


/*
	getList já relaciona inscritos x disponíveis
	userList(user_id: number) {

		this.http.get('frontpage/userlist/' + user_id).subscribe(res => {

			this.list_user = res.json();

		});
} */

}