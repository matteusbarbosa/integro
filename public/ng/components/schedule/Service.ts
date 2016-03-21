import {Schedule} from './Schedule';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class ScheduleService {

	http

	constructor(@Inject(Http) http: Http) {

		this.http = http;
		
	}

	find(schedule_id : number){

		return this.http.get('schedule/search/' + schedule_id);
	}

	bind(schedule_id : number, user_id: number) {

		return this.http.get('schedule/bind?id=' + schedule_id + '&user_id=' + user_id);
	}

	unlink(schedule_id: number, user_id: number) {

		return this.http.get('schedule/unlink?id=' + schedule_id + '&user_id=' + user_id);
	}

	getList(course_id : number) {

		return this.http.get('schedule/bycourse/' + course_id);

	}


/*
	getList já relaciona inscritos x disponíveis
	userList(user_id: number) {

		this.http.get('schedule/userlist/' + user_id).subscribe(res => {

			this.list_user = res.json();

		});
} */

}