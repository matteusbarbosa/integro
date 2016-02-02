import {ClassOptional} from './ClassOptional';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class ClassOptionalService {

	http

	constructor(@Inject(Http) http: Http) {

		this.http = http;
		
	}

	find(query_search : string){

		return this.http.get('classoptional/search/' + query_search);
	}

	bind(classoptional_id : number, user_id: number) {

		return this.http.get('classoptional/bind?id=' + classoptional_id + '&user_id=' + user_id);
	}

	unlink(classoptional_id: number, user_id: number) {

		return this.http.get('classoptional/unlink?id=' + classoptional_id + '&user_id=' + user_id);
	}

	getList(course_id : number) {

		return this.http.get('classoptional/bycourse/' + course_id);

	}


/*
	getList já relaciona inscritos x disponíveis
	userList(user_id: number) {

		this.http.get('classoptional/userlist/' + user_id).subscribe(res => {

			this.list_user = res.json();

		});
} */

}