import {Frontpage} from './Frontpage';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class FrontpageService {

	http

	constructor(@Inject(Http) http: Http) {

		this.http = http;
		
	}

	find(frontpage_id : number){

		return this.http.get('frontpage/search/' + frontpage_id);
	}

	bind(frontpage_id : number, user_id: number) {

		return this.http.get('frontpage/bind?id=' + frontpage_id + '&user_id=' + user_id);
	}

	unlink(frontpage_id: number, user_id: number) {

		return this.http.get('frontpage/unlink?id=' + frontpage_id + '&user_id=' + user_id);
	}

	getList(course_id : number) {

		return this.http.get('frontpage/bycourse/' + course_id);

	}


/*
	getList já relaciona inscritos x disponíveis
	userList(user_id: number) {

		this.http.get('frontpage/userlist/' + user_id).subscribe(res => {

			this.list_user = res.json();

		});
} */

}