import {Component, Inject} from 'angular2/core';
import {CORE_DIRECTIVES, NgFor, NgIf, NgClass, NgStyle, FORM_DIRECTIVES} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {MediaService} from './Service';
import {Media} from './Media';
import {Category} from './Category';
import {User} from '../user/User';
import {StorageService} from './Storage';

@Component({
	selector: 'media',
	templateUrl: '/media/list',
	viewProviders: [FORM_DIRECTIVES, MediaService, HTTP_PROVIDERS],
	directives: [NgFor, NgIf, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES],
	providers: [HTTP_PROVIDERS, StorageService]
})

export class MediaComponent {

	media : Media
	user : User
	st : StorageService

	query_search
	query_search_last
	course

	list_user

	filesToUpload: Array<File>

	result_bind
	result_unlink
	result_search
	result_delete

	md : MediaService

	list_course = []

	categories_available = []

	constructor(@Inject(Http) http: Http) {
		this.md = new MediaService(http);
		this.st = new StorageService(http);
		this.media = new Media();
		this.user = new User();

		this.filesToUpload = [];
	}

	ngOnInit(){
		this.course = 1;
		this.getList(this.course);
	}

	upload(){

		this.st.makeFileRequest([],this.filesToUpload);
	}

	fileChange(fileInput: any) {

		this.filesToUpload = <Array<File>> fileInput.target.files;
	}

	getList(course_id : number){
		this.md.getList(course_id).subscribe(res => {
			this.list_course = res.json();
		});
	}

	edit(discipline_id : number, md_instance: Media, user_id: number) {

		this.Media = md_instance;
		this.Media.File = null;
		this.user.id = user_id;
		this.getCategories(discipline_id);
	}

	create(discipline_id: number, user_id: number) {
		this.media = new Media();
	}

	save(media: Media, user_id: number) {

		console.log('form data:');
		console.log(media);

		console.log('file:');
		console.log(this.filesToUpload);

		this.upload();

		this.md.save(media, user_id).subscribe(res => {
			return this.media = res.json();
		});
	}

	delete() {
		this.md.delete(this.media.Id).subscribe(res => {
			return this.result_delete = res.json();
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

		if (md_instance.Subs === true){
			this.unlink(md_instance, user_id);
		} else{
			this.bind(md_instance, user_id);
		}
	}

	bind(md_instance : Media, user_id : number) {

		md_instance.Subs = true;

		this.md.bind(md_instance.id, user_id).subscribe(res => {

			this.result_bind = res.json();

		});
	}

	unlink(md_instance: Media, user_id: number) {

		md_instance.Subs = false;

		this.md.unlink(md_instance.id, user_id).subscribe(res => {

			this.result_unlink = res.json();

		});
	}

	getCategories(discipline_id: number) {
		this.md.getCategories(discipline_id).subscribe(res => {
			this.categories_available = res.json();
		});
	}

	get Media(): Media {
		return this.media;
	}

	set Media(media: Media) {
		this.media = media;
	}

	get User(): User {
		return this.user;
	}

	set User(user: User) {
		this.user = user;
	}
}