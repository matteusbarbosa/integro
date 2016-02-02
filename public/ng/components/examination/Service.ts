import {Examination} from './Examination';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class ExaminationService {

	http

	constructor(@Inject(Http) http: Http) {
		this.http = http;
	}

	find(examination_id : number){

		return this.http.get('examination/search/' + examination_id);
	}

	bind(examination_id : number, user_id: number) {

		return this.http.get('examination/bind?id=' + examination_id + '&user_id=' + user_id);
	}

	unlink(examination_id: number, user_id: number) {

		return this.http.get('examination/unlink?id=' + examination_id + '&user_id=' + user_id);
	}

	getList(course_id : number) {

		return this.http.get('examination/bycourse/' + course_id);

	}


/*
	getList já relaciona inscritos x disponíveis
	userList(user_id: number) {

		this.http.get('examination/userlist/' + user_id).subscribe(res => {

			this.list_user = res.json();

		});
} */

}