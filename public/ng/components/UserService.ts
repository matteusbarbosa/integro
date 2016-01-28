import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable
export class UserService {

	private _users = []
	http

	constructor(http:Http){

		this.http = http;
		
	}

	getList(discipline_id : number) {

		this.http.get('user/list/'+discipline_id).subscribe(res => {

			this._users = res.json();

		});
	}


}