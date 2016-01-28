import {Inject, Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

export class ExaminationService {

	private _examinations = []
	http

	constructor(@Inject(Http) http:Http){

		this.http = http;
		
	}

	getList(discipline_id : number) {

		this.http.get('examination/list/'+discipline_id).subscribe(res => {

			this._examinations = res.json();

			console.log(this._examinations);

		});
	}

}