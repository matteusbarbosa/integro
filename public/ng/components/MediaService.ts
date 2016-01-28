import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable
export class MediaService {

	private _medias = []
	http

	constructor(http:Http){

		this.http = http;
		
	}

	getList(discipline_id : number) {

		this.http.get('media/list/'+discipline_id).subscribe(res => {

			this._medias = res.json();

		});
	}


}