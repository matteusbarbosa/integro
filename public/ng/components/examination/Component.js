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
    var ExaminationComponent;
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
            ExaminationComponent = (function () {
                function ExaminationComponent(http) {
                    this.list_course = [];
                    this.exs = new Service_1.ExaminationService(http);
                    this.course = 1;
                    this.getList(this.course);
                }
                ExaminationComponent.prototype.ngOnInit = function () {
                };
                ExaminationComponent.prototype.getList = function (course_id) {
                    var _this = this;
                    this.exs.getList(course_id).subscribe(function (res) {
                        _this.list_course = res.json();
                        _this.list_course.disciplines.forEach(function (dp) {
                            dp.examinations.forEach(function (ex) {
                                ex.vacancies_left = _this.vacanciesAvailable(ex.id);
                                console.log(ex.vacancies_left);
                            });
                        });
                    });
                };
                ExaminationComponent.prototype.search = function () {
                    var _this = this;
                    if (this.query_search.length == 0) {
                        return false;
                    }
                    this.exs.find(this.query_search).subscribe(function (res) {
                        _this.searchlastquery = _this.query_search;
                        return _this.result_search = res.json();
                    });
                };
                ExaminationComponent.prototype.toggleBind = function (exs_instance, user_id) {
                    if (exs_instance.subs === 1) {
                        this.unlink(exs_instance, user_id);
                    }
                    if (exs_instance.subs === 0) {
                        if (this.result_vacancies.vacancies_left > 0) {
                            this.bind(exs_instance, user_id);
                        }
                        else {
                            exs_instance.subs = 2;
                        }
                    }
                };
                /*
                
                -Verifique vacancies e validade da schedule
                -Verifique quantidade de binds válidos para a examination
        
                */
                ExaminationComponent.prototype.vacanciesAvailable = function (exs_instance) {
                    var _this = this;
                    this.exs.vacanciesAvailable(exs_instance.id).subscribe(function (res) {
                        _this.result_vacancies = res.json();
                    });
                };
                ExaminationComponent.prototype.bind = function (exs_instance, user_id) {
                    var _this = this;
                    if (this.vacanciesAvailable(exs_instance) > 0) {
                        exs_instance.subs = 1;
                        this.exs.bind(exs_instance.id, user_id).subscribe(function (res) {
                            _this.result_bind = res.json();
                        });
                    }
                    else {
                        exs_instance.subs = 2;
                    }
                };
                ExaminationComponent.prototype.unlink = function (exs_instance, user_id) {
                    var _this = this;
                    exs_instance.subs = 0;
                    this.exs.unlink(exs_instance.id, user_id).subscribe(function (res) {
                        _this.result_unlink = res.json();
                    });
                };
                ExaminationComponent = __decorate([
                    core_1.Component({
                        selector: 'examination',
                        templateUrl: '/examination/list',
                        viewProviders: [common_1.FORM_DIRECTIVES, Service_1.ExaminationService, http_1.HTTP_PROVIDERS],
                        directives: [common_1.NgFor, common_1.NgIf, common_1.NgClass],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ExaminationComponent);
                return ExaminationComponent;
            })();
            exports_1("ExaminationComponent", ExaminationComponent);
        }
    }
});
//# sourceMappingURL=Component.js.map