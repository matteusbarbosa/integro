import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {WarningService} from './Service';
import {Warning} from './Warning';
/* import 'rxjs/add/operator/map'; */

@Component({
	selector: 'warning',
	templateUrl: '/warning/list',
	viewProviders: [FORM_DIRECTIVES, WarningService, HTTP_PROVIDERS],
	directives: [NgFor, NgIf, NgClass],
	providers: [HTTP_PROVIDERS]
})

export class WarningComponent {

	query_search
	query_search_last
	course

	list_user

	result_bind
	result_unlink
	result_search

	wr : WarningService

	list_course = []
	
	constructor(@Inject(Http) http: Http) {

		this.wr = new WarningService(http);

	}

	ngOnInit(){
		this.course = 1;

		this.getList(this.course);

	}

	getList(course_id : number){

		this.wr.getList(course_id).subscribe(res => {

			this.list_course = res.json();

		});
		
	}

	search() {

		if(this.query_search.length == 0){
			return false;
		}

		this.wr.find(this.query_search).subscribe(res => {

			this.query_search_last = this.query_search;

			return this.result_search = res.json();

		});
	}
}