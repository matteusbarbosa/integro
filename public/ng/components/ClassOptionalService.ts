import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable
export class ClassOptionalService {

	private _classoptionals = []
	http

	constructor(http:Http){

		this.http = http;
		
	}

	getList(discipline_id : number) {

		this.http.get('classoptional/list/'+discipline_id).subscribe(res => {

			this._classoptionals = res.json();

		});
	}


}