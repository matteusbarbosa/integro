import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ExaminationService} from './Service';
import {Examination} from './Examination';
/* import 'rxjs/add/operator/map'; */

@Component({
	selector: 'examination',
	templateUrl: '/examination/list',
	viewProviders: [FORM_DIRECTIVES, ExaminationService, HTTP_PROVIDERS],
	directives: [NgFor, NgIf, NgClass],
	providers: [HTTP_PROVIDERS]
})

export class ExaminationComponent {

	query_search
	searchlastquery
	isBound
	course

	list_user

	result_bind
	result_unlink
	result_search

	exs : ExaminationService

	list_course = []
	
	constructor(@Inject(Http) http: Http) {

		this.exs = new ExaminationService(http);

	}

	ngOnInit(){
		this.course = 1;

		this.getList(this.course);
	}

	ngOnDestroy(){

	}

	getList(course_id : number){

		this.exs.getList(course_id).subscribe(res => {

			this.list_course = res.json();

		});
		
	}

	search() {

		if(this.query_search.length == 0){
			return false;
		}

		this.exs.find(this.query_search).subscribe(res => {

			this.searchlastquery = this.query_search;

			return this.result_search = res.json();

		});
	}

	bind(exs_instance : Examination, user_id : number) {

		exs_instance.subs = true;

		this.exs.bind(exs_instance.id, user_id).subscribe(res => {

			this.result_bind = res.json();

		});

	}

	unlink(exs_instance: Examination, user_id: number) {

		exs_instance.subs = false;

		this.exs.unlink(exs_instance.id, user_id).subscribe(res => {

			this.result_unlink = res.json();

		});
	}
}