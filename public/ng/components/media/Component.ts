import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {MediaService} from './Service';
import {Media} from './Media';
/* import 'rxjs/add/operator/map'; */

@Component({
	selector: 'media',
	templateUrl: '/media/list',
	viewProviders: [FORM_DIRECTIVES, MediaService, HTTP_PROVIDERS],
	directives: [NgFor, NgIf, NgClass],
	providers: [HTTP_PROVIDERS]
})

export class MediaComponent {

	query_search
	query_search_last
	course

	list_user

	result_bind
	result_unlink
	result_search

	md : MediaService

	list_course = []
	
	constructor(@Inject(Http) http: Http) {

		this.md = new MediaService(http);

	}

	ngOnInit(){
		this.course = 1;

		this.getList(this.course);
	}


	getList(course_id : number){

		this.md.getList(course_id).subscribe(res => {

			this.list_course = res.json();

		});
		
	}

	search() {

		if(this.query_search.length == 0){
			return false;
		}

		this.md.find(this.query_search).subscribe(res => {

			this.query_search_last = this.query_search;

			return this.result_search = res.json();

		});
	}

	toggleBind(md_instance: Media, user_id: number) {

		if (md_instance.subs === true){
			this.unlink(md_instance, user_id);
		} else{
			this.bind(md_instance, user_id);
		}
	}

	bind(md_instance : Media, user_id : number) {

		md_instance.subs = true;

		this.md.bind(md_instance.id, user_id).subscribe(res => {

			this.result_bind = res.json();

		});

	}

	unlink(md_instance: Media, user_id: number) {

		md_instance.subs = false;

		this.md.unlink(md_instance.id, user_id).subscribe(res => {

			this.result_unlink = res.json();

		});
	}
}