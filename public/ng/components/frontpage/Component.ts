import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {FrontpageService} from './Service';
import {Frontpage} from './Frontpage';
/* import 'rxjs/add/operator/map'; */

@Component({
	selector: 'frontpage',
	templateUrl: '/frontpage/list',
	viewProviders: [FORM_DIRECTIVES, FrontpageService, HTTP_PROVIDERS],
	directives: [NgFor, NgIf, NgClass],
	providers: [HTTP_PROVIDERS]
})

export class FrontpageComponent {

	query_search
	query_search_last
	isBound
	course

	list_user

	result_bind
	result_unlink
	result_search

	fp : FrontpageService

	list_course = []
	
	constructor(@Inject(Http) http: Http) {

		this.fp = new FrontpageService(http);

	}

	ngOnInit(){
		this.course = 1;

		this.getList(this.course);
	}

	getList(course_id : number){

		this.fp.getList(course_id).subscribe(res => {

			this.list_course = res.json();

		});
		
	}

	search() {

		if(this.query_search.length == 0){
			return false;
		}

		this.fp.find(this.query_search).subscribe(res => {

			this.query_search_last = this.query_search;

			return this.result_search = res.json();

		});
	}
}