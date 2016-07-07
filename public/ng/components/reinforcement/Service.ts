import {Reinforcement} from './Reinforcement';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class ReinforcementService {

	http

	constructor(@Inject(Http) http: Http) {

		this.http = http;
		
	}

	find(query_search : string){

		return this.http.get('api/reinforcement/search/' + query_search);
	}

	bind(reinforcement_id : number, user_id: number) {

		return this.http.get('api/bind/reinforcement?id=' + reinforcement_id + '&user_id=' + user_id);
	}

	unlink(reinforcement_id: number, user_id: number) {

		return this.http.get('api/unlink/reinforcement?id=' + reinforcement_id + '&user_id=' + user_id);
	}

	getList(course_id : number) {

		return this.http.get('api/course/reinforcements?course_id=' + course_id);

	}


/*
	getList já relaciona inscritos x disponíveis
	userList(user_id: number) {

		this.http.get('reinforcement/userlist/' + user_id).subscribe(res => {

			this.list_user = res.json();

		});
} */

}