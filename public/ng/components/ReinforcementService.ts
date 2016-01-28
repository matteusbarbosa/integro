import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable
export class ExaminationService {

	private _reinforcements = []
	http

	constructor(http:Http){

		this.http = http;
		
	}

	getList(discipline_id : number) {

		this.http.get('reinforcement/list/'+discipline_id).subscribe(res => {

			this._reinforcements = res.json();

		});
	}


}