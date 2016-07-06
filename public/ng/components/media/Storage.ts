import {Media} from './Media';
import {Injectable, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers, RequestOptions, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

export class StorageService {

	http
	path_upload = '/media/upload'

	constructor(@Inject(Http) http: Http) {
		this.http = http;
	}

	public makeFileRequest(params: string[], files: any) {

		    return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            for(var i = 0; i < files.length; i++) {
                formData.append("file_up", files[i], files[i].name);
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.open("POST", this.path_upload, true);
            xhr.send(formData);
        });
	}
}
