export class Media {
	private id : number
	private user_id : number
	private discipline_id : number
	private title : string
	private url : string
	private metatitle : string
	private title_category : string
	private format : string
	private size : number
	private details : string
	private subs : boolean
	private file : File

	public Media(user_id : number, title : string, url : string, details : string, metatitle : string, file : File){
		this.UserId = user_id;
		this.Title = title;
		this.Url = url;
		this.Details = details;
		this.MetaTitle = metatitle;
		this.File = file;
	}


	public Clone(){

	}

	public get Id():number{
		return this.id;
	}

	public set Id(id:number){
		this.id = id;
	}

	get UserId(): number {
		return this.user_id;
	}

	set UserId(user_id: number) {
		this.user_id = user_id;
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

	get Url(): string {
		return this.url;
	}

	set Url(url: string) {
		this.url = url;
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

	get Format(): string {
		return this.format;
	}

	set Format(format: string) {
		this.format = format;
	}

	get Size(): number {
		return this.size;
	}

	set Size(size: number) {
		this.size = size;
	}

	get Subs(): boolean {
		return this.subs;
	}

	set Subs(subs: boolean) {
		this.subs = subs;
	}

	get File(): File {
		return this.file;
	}

	set File(file: File) {
		this.file = file;
	}
}