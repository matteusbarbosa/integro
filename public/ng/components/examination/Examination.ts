
export class Examination{

	id
	title
	details
	discipline_id
	subs : boolean
	vacancies_left : number

	constructor(examination : Object){
		this.id = examination.id,
		this.subs = examination.subs,
		this.vacancies_left = examination.vacancies_left
	}

}