export class Category {
	private id: number
	private discipline_id: number
	private title: string
	private details: string

	Category() {

	}

	Clone() {

	}

	get Id(): number {
		return this.id;
	}

	set Id(id: number) {
		this.id = id;
	}

	get DisciplineId(): number {
		return this.discipline_id;
	}

	set DisciplineId(discipline_id: number) {
		this.discipline_id = discipline_id;
	}

	get Title(): string {
		return this.title;
	}

	set Title(title: string) {
		this.title = title;
	}

	get MetaTitle(): string {
		return this.metatitle;
	}

	set MetaTitle(metatitle: string) {
		this.metatitle = metatitle;
	}

	get Details(): string {
		return this.details;
	}

	set Details(details: string) {
		this.details = details;
	}
}