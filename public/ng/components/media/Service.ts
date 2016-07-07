import {Media} from './Media';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers, RequestOptions, Response} from 'angular2/http';

export class MediaService {

	http

	constructor(@Inject(Http) http: Http) {
		this.http = http;
	}

	find(query_search : number){
		return this.http.get('api/media/search/' + query_search);
	}

	findById(media_id : number){
		return this.http.get('api/media/find/' + media_id);
	}

	bind(media_id : number, user_id: number) {
		return this.http.get('api/bind/media?id=' + media_id + '&user_id=' + user_id);
	}

	unlink(media_id: number, user_id: number) {
		return this.http.get('api/unlink/media?id=' + media_id + '&user_id=' + user_id);
	}

	delete(media_id : number) {
		return this.http.delete('media/delete?id=' + media_id);
	}

	save(media_instance: Media, user_id: number) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post('media/save', JSON.stringify(media_instance), options);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || {};
	}
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Promise.reject(errMsg);
	}

	getList(course_id : number) {
		return this.http.get('api/course/media?course_id=' + course_id);
	}

	getCategories(discipline_id : number) {
		return this.http.get('api/discipline/categories?discipline_id=' + discipline_id);
	}
}
