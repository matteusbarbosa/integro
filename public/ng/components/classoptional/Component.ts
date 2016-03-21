import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ClassOptionalService} from './Service';
import {ClassOptional} from './ClassOptional';
/* import 'rxjs/add/operator/map'; */

@Component({
	selector: 'classoptional',
	templateUrl: '/classoptional/list',
	viewProviders: [FORM_DIRECTIVES, ClassOptionalService, HTTP_PROVIDERS],
	directives: [NgFor, NgIf, NgClass],
	providers: [HTTP_PROVIDERS]
})

export class ClassOptionalComponent {

	query_search
	query_search_last
	course

	list_user

	result_bind
	result_unlink
	result_search

	copt : ClassOptionalService

	list_course = []
	
	constructor(@Inject(Http) http: Http) {

		this.copt = new ClassOptionalService(http);

	}

	ngOnInit(){
		this.course = 1;

		this.getList(this.course);
	}

	getList(course_id : number){

		this.copt.getList(course_id).subscribe(res => {

			this.list_course = res.json();

		});
		
	}

	search() {

		if(this.query_search.length == 0){
			return false;
		}

		this.copt.find(this.query_search).subscribe(res => {

			this.query_search_last = this.query_search;

			return this.result_search = res.json();

		});
	}

	toggleBind(copt_instance: ClassOptional, user_id: number) {

		if (copt_instance.subs === true){
			this.unlink(copt_instance, user_id);
		} else{
			this.bind(copt_instance, user_id);
		}
	}

	bind(copt_instance : ClassOptional, user_id : number) {

		copt_instance.subs = true;

		this.copt.bind(copt_instance.id, user_id).subscribe(res => {

			this.result_bind = res.json();

		});

	}

	unlink(copt_instance: ClassOptional, user_id: number) {

		copt_instance.subs = false;

		this.copt.unlink(copt_instance.id, user_id).subscribe(res => {

			this.result_unlink = res.json();

		});
	}
}