System.register(['angular2/core', 'angular2/common', 'angular2/http', './Service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1, http_1, Service_1;
    var MediaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }],
        execute: function() {
            /* import 'rxjs/add/operator/map'; */
            MediaComponent = (function () {
                function MediaComponent(http) {
                    this.list_course = [];
                    this.md = new Service_1.MediaService(http);
                }
                MediaComponent.prototype.ngOnInit = function () {
                    this.course = 1;
                    this.getList(this.course);
                };
                MediaComponent.prototype.getList = function (course_id) {
                    var _this = this;
                    this.md.getList(course_id).subscribe(function (res) {
                        _this.list_course = res.json();
                    });
                };
                MediaComponent.prototype.search = function () {
                    var _this = this;
                    if (this.query_search.length == 0) {
                        return false;
                    }
                    this.md.find(this.query_search).subscribe(function (res) {
                        _this.query_search_last = _this.query_search;
                        return _this.result_search = res.json();
                    });
                };
                MediaComponent.prototype.toggleBind = function (md_instance, user_id) {
                    if (md_instance.subs === true) {
                        this.unlink(md_instance, user_id);
                    }
                    else {
                        this.bind(md_instance, user_id);
                    }
                };
                MediaComponent.prototype.bind = function (md_instance, user_id) {
                    var _this = this;
                    md_instance.subs = true;
                    this.md.bind(md_instance.id, user_id).subscribe(function (res) {
                        _this.result_bind = res.json();
                    });
                };
                MediaComponent.prototype.unlink = function (md_instance, user_id) {
                    var _this = this;
                    md_instance.subs = false;
                    this.md.unlink(md_instance.id, user_id).subscribe(function (res) {
                        _this.result_unlink = res.json();
                    });
                };
                MediaComponent = __decorate([
                    core_1.Component({
                        selector: 'media',
                        templateUrl: '/media/list',
                        viewProviders: [common_1.FORM_DIRECTIVES, Service_1.MediaService, http_1.HTTP_PROVIDERS],
                        directives: [common_1.NgFor, common_1.NgIf, common_1.NgClass],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MediaComponent);
                return MediaComponent;
            })();
            exports_1("MediaComponent", MediaComponent);
        }
    }
});
//# sourceMappingURL=Component.js.map