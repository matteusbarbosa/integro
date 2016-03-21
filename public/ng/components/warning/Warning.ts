export class Warning {

	id
	title
	details
	discipline_id

	constructor(warning: Object) {
		this.id = warning.id
	}
}