import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ExaminationService} from './Service';
import 'rxjs/add/operator/map';

@Component({
	selector: 'examination',
	templateUrl: '/examination/list',
	viewProviders: [FORM_DIRECTIVES, ExaminationService, HTTP_PROVIDERS],
	directives: [NgFor, NgIf, NgClass],
	providers: [HTTP_PROVIDERS]
})

export class ExaminationComponent {

	searchquery
	searchlastquery
	isBound
	course

	exs : ExaminationService

	list_course
	
	constructor(@Inject(Http) http: Http) {

		this.exs = new ExaminationService(http);

		this.course = 1;

		this.getList(this.course);

		console.log(this.list_course);


	}

	getList(course_id : number){

		this.exs.getList(course_id);

		this.list_course = this.exs.list_course;
	}

	search() {

		this.exs.find(this.searchquery);

		this.searchlastquery = this.searchquery;

		return this.exs.result_search;

	}

	bind(examination_id : number, user_id : number) {

		this.exs.bind(examination_id, user_id);

		return this.exs.result_bind;

	}

	unlink(examination_id : number, user_id : number) {

		this.exs.unlink(examination_id, user_id);

		return this.exs.result_bind;

	}
}