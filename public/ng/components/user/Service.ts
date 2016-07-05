import {user} from './user';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class userService {

	http

	constructor(@Inject(Http) http: Http) {

		this.http = http;
		
	}

	find(user_id : number){

		return this.http.get('user/search/' + user_id);
	}

	bind(user_id : number, user_id: number) {

		return this.http.get('user/bind?id=' + user_id + '&user_id=' + user_id);
	}

	unlink(user_id: number, user_id: number) {

		return this.http.get('user/unlink?id=' + user_id + '&user_id=' + user_id);
	}

	getList(course_id : number) {

		return this.http.get('user/bycourse/' + course_id);

	}

}