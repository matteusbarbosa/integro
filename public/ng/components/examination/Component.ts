import {Component, Inject} from 'angular2/core';
import {NgFor, NgIf, NgClass, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ExaminationService} from './Service';
import {ScheduleService} from '../schedule/Service';
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

	sch: ScheduleService

	list_course = []
	
	constructor(@Inject(Http) http: Http) {
		
		this.exs = new ExaminationService(http);

		this.course = 1;

		this.getList(this.course);

	}

	ngOnInit() {

	}

	getList(course_id : number){

		this.exs.getList(course_id).subscribe(res => {

			this.list_course = res.json();

			this.list_course.disciplines.forEach((dp) => {
				dp.examinations.forEach((ex) => {

					this.vacanciesAvailable(ex).subscribe(res => { ex.vacancies_left = res.vacancies_left }, err => this.logError(err));

				});
			});
		});	


	}

	logError(err) {
		console.error('Erro encontrado: ' + err);
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

	toggleBind(exs_instance: Examination, user_id: number) {

		if(exs_instance.vacancies_left <= 5){
			this.vacanciesAvailable(exs_instance).subscribe(res => { exs_instance.vacancies_left = res.vacancies_left }, err => this.logError(err));
		}

		if (exs_instance.subs === true){
			this.unlink(exs_instance, user_id);
		} else {
			if (exs_instance.vacancies_left > 0) {
				this.bind(exs_instance, user_id);
			}
		}
	}

		/*
		
		-Verifique vacancies e validade da schedule
		-Verifique quantidade de binds válidos para a examination

		*/
		vacanciesAvailable(exs_instance: Examination) {

			return this.exs.vacanciesAvailable(exs_instance.id);

		}

		checkDates(exs_instance: Examination) {

			return this.exs.checkDates(exs_instance.id);

		}

		bind(exs_instance : Examination, user_id : number) {

			

			this.exs.bind(exs_instance.id, user_id).subscribe(res => {

				this.result_bind = res.json();

				exs_instance.subs = true;

			});
		}

		unlink(exs_instance: Examination, user_id: number) {

				this.exs.unlink(exs_instance.id, user_id).subscribe(res => {

				this.result_unlink = res.json();

				exs_instance.subs = false;

			});
		}

	}