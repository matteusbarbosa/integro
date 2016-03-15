
export class Profile {

	id
	title
	details
	discipline_id
	subs

	constructor(schedule: Object) {
		this.id = schedule.id
	}

}