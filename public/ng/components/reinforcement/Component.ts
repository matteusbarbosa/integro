import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ReinforcementService} from './Service';
import {Reinforcement} from './Reinforcement';
/* import 'rxjs/add/operator/map'; */

@Component({
	selector: 'reinforcement',
	templateUrl: '/reinforcement/list',
	viewProviders: [FORM_DIRECTIVES, ReinforcementService, HTTP_PROVIDERS],
	directives: [NgFor, NgIf, NgClass],
	providers: [HTTP_PROVIDERS]
})

export class ReinforcementComponent {

	query_search
	query_search_last
	course

	list_user

	result_bind
	result_unlink
	result_search

	rf : ReinforcementService

	list_course = []
	
	constructor(@Inject(Http) http: Http) {

		this.rf = new ReinforcementService(http);

	}

	ngOnInit(){
		this.course = 1;

		this.getList(this.course);
	}


	getList(course_id : number){

		this.rf.getList(course_id).subscribe(res => {

			this.list_course = res.json();

		});
		
	}

	search() {

		if(this.query_search.length == 0){
			return false;
		}

		this.rf.find(this.query_search).subscribe(res => {

			this.query_search_last = this.query_search;

			return this.result_search = res.json();

		});
	}

	toggleBind(rf_instance: Reinforcement, user_id: number) {

		if (rf_instance.subs === true){
			this.unlink(rf_instance, user_id);
		} else{
			this.bind(rf_instance, user_id);
		}
	}

	bind(rf_instance : Reinforcement, user_id : number) {

		rf_instance.subs = true;

		this.rf.bind(rf_instance.id, user_id).subscribe(res => {

			this.result_bind = res.json();

		});

	}

	unlink(rf_instance: Reinforcement, user_id: number) {

		rf_instance.subs = false;

		this.rf.unlink(rf_instance.id, user_id).subscribe(res => {

			this.result_unlink = res.json();

		});
	}
}