import {Media} from './Media';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class MediaService {

	http

	constructor(@Inject(Http) http: Http) {

		this.http = http;
		
	}

	find(query_search : number){

		return this.http.get('media/search/' + query_search);
	}

	bind(media_id : number, user_id: number) {

		return this.http.get('media/bind?id=' + media_id + '&user_id=' + user_id);
	}

	unlink(media_id: number, user_id: number) {

		return this.http.get('media/unlink?id=' + media_id + '&user_id=' + user_id);
	}

	getList(course_id : number) {

		return this.http.get('media/bycourse/' + course_id);

	}


/*
	getList já relaciona inscritos x disponíveis
	userList(user_id: number) {

		this.http.get('media/userlist/' + user_id).subscribe(res => {

			this.list_user = res.json();

		});
} */

}