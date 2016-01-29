import {Examination} from './Examination';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class ExaminationService {

	list_course
	list_user
	
	result_bind
	result_unlink
	result_search

	http

	constructor(@Inject(Http) http: Http) {

		this.http = http;
		
	}

	find(examination_id : number){

		this.http.get('examination/search/' + examination_id).subscribe(res => {

			this.result_search = res.json();

		});
	}

	bind(examination_id : number, user_id : number){

		this.http.get('examination/bind?examination_id=' + examination_id + '&user_id=' + user_id).subscribe(res => {

			this.result_bind = res.json();

		});
	}

	unlink(examination_id: number, user_id: number) {
		this.http.get('examination/unlink/' + examination_id).subscribe(res => {

			this.result_unlink = res.json();

		});
	}

	getList(course_id : number) {

		this.http.get('examination/bycourse/'+ course_id)
		.map(res => res.json())
		.subscribe(list_course => this.list_course = list_course);
	}

/*
	getList já relaciona inscritos x disponíveis
	userList(user_id: number) {

		this.http.get('examination/userlist/' + user_id).subscribe(res => {

			this.list_user = res.json();

		});
} */

}