import {Profile} from './Profile';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class ProfileService {

	http

	constructor(@Inject(Http) http: Http) {

		this.http = http;
		
	}

	find(profile_id : number){

		return this.http.get('profile/search/' + profile_id);
	}

	bind(profile_id : number, user_id: number) {

		return this.http.get('profile/bind?id=' + profile_id + '&user_id=' + user_id);
	}

	unlink(profile_id: number, user_id: number) {

		return this.http.get('profile/unlink?id=' + profile_id + '&user_id=' + user_id);
	}

	getList(course_id : number) {

		return this.http.get('profile/bycourse/' + course_id);

	}


/*
	getList já relaciona inscritos x disponíveis
	userList(user_id: number) {

		this.http.get('profile/userlist/' + user_id).subscribe(res => {

			this.list_user = res.json();

		});
} */

}