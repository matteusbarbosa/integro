import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ExaminationService} from './ExaminationService';

@Component({
	selector: 'examination',
	templateUrl: '/examination/list',
	viewProviders: [FORM_DIRECTIVES, ExaminationService],
	directives: [NgFor, NgIf, NgClass],
	providers: [ExaminationService, HTTP_PROVIDERS]
})

export class ExaminationComponent {

	searchresults = {}
	searchquery
	searchlastquery
	http
	isBound
	exs

	constructor(@Inject(Http) http:Http, 
		@Inject(ExaminationService) exs:ExaminationService){

		this.http = http;
		this.exs = this.exs.getList(1)._examinations;

		console.log(this.exs);
		

	}

	search() {
		
		this.http.get('examination/search/' + this.searchquery).subscribe(res => {

			this.searchresults = res.json();

			this.searchlastquery = this.searchquery;

		});

	}

	bind(examination_id : number) {

		console.log(examination_id);

		this.http.get('examination/bind/' + examination_id).subscribe(res => {

			this.listbound[examination_id] = true;

			this.result = res.json();

		});
	}

	unlink(examination_id : number) {

		this.http.get('examination/unlink/' + examination_id).subscribe(res => {

			this.listbound[examination_id] = false;

			this.result = res.json();

			console.log(isBound);

		});

		return true;
	}
}