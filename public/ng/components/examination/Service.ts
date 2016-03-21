import {Examination} from './Examination';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import 'rxjs/Rx';

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

	vacanciesAvailable(examination_id: number) {
		return this.http.get('schedule/vacancies/check/examination/' + examination_id).map(response => response.json());
	}

	checkDates(examination_id: number) {
		return this.http.get('schedule/dates/check/examination/' + examination_id).map(response => response.json());
	}
}