import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ProfileService} from './Service';
import {Profile} from './Profile';
/* import 'rxjs/add/operator/map'; */

@Component({
	selector: 'profile',
	templateUrl: '/profile/list',
	viewProviders: [FORM_DIRECTIVES, ProfileService, HTTP_PROVIDERS],
	directives: [NgFor, NgIf, NgClass],
	providers: [HTTP_PROVIDERS]
})

export class ProfileComponent {

	query_search
	searchlastquery
	isBound
	course

	list_user

	result_bind
	result_unlink
	result_search

	pf : ProfileService

	list_course = []
	
	constructor(@Inject(Http) http: Http) {

		this.pf = new ProfileService(http);

	}

	ngOnInit(){
		this.course = 1;

		this.getList(this.course);
	}



	ngOnDestroy(){

	}

	getList(course_id : number){

		this.pf.getList(course_id).subscribe(res => {

			this.list_course = res.json();

		});
		
	}

	search() {

		if(this.query_search.length == 0){
			return false;
		}

		this.pf.find(this.query_search).subscribe(res => {

			this.searchlastquery = this.query_search;

			return this.result_search = res.json();

		});
	}

	toggleBind(pf_instance: Profile, user_id: number) {

		if (pf_instance.subs === true){
			this.unlink(pf_instance, user_id);
		} else{
			this.bind(pf_instance, user_id);
		}
	}

	bind(pf_instance : Profile, user_id : number) {

		pf_instance.subs = true;

		this.pf.bind(pf_instance.id, user_id).subscribe(res => {

			this.result_bind = res.json();

		});

	}

	unlink(pf_instance: Profile, user_id: number) {

		pf_instance.subs = false;

		this.pf.unlink(pf_instance.id, user_id).subscribe(res => {

			this.result_unlink = res.json();

		});
	}
}