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
    var ClassOptionalComponent;
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
            ClassOptionalComponent = (function () {
                function ClassOptionalComponent(http) {
                    this.list_course = [];
                    this.copt = new Service_1.ClassOptionalService(http);
                }
                ClassOptionalComponent.prototype.ngOnInit = function () {
                    this.course = 1;
                    this.getList(this.course);
                };
                ClassOptionalComponent.prototype.getList = function (course_id) {
                    var _this = this;
                    this.copt.getList(course_id).subscribe(function (res) {
                        _this.list_course = res.json();
                    });
                };
                ClassOptionalComponent.prototype.search = function () {
                    var _this = this;
                    if (this.query_search.length == 0) {
                        return false;
                    }
                    this.copt.find(this.query_search).subscribe(function (res) {
                        _this.query_search_last = _this.query_search;
                        return _this.result_search = res.json();
                    });
                };
                ClassOptionalComponent.prototype.toggleBind = function (copt_instance, user_id) {
                    if (copt_instance.subs === true) {
                        this.unlink(copt_instance, user_id);
                    }
                    else {
                        this.bind(copt_instance, user_id);
                    }
                };
                ClassOptionalComponent.prototype.bind = function (copt_instance, user_id) {
                    var _this = this;
                    copt_instance.subs = true;
                    this.copt.bind(copt_instance.id, user_id).subscribe(function (res) {
                        _this.result_bind = res.json();
                    });
                };
                ClassOptionalComponent.prototype.unlink = function (copt_instance, user_id) {
                    var _this = this;
                    copt_instance.subs = false;
                    this.copt.unlink(copt_instance.id, user_id).subscribe(function (res) {
                        _this.result_unlink = res.json();
                    });
                };
                ClassOptionalComponent = __decorate([
                    core_1.Component({
                        selector: 'classoptional',
                        templateUrl: '/classoptional/list',
                        viewProviders: [common_1.FORM_DIRECTIVES, Service_1.ClassOptionalService, http_1.HTTP_PROVIDERS],
                        directives: [common_1.NgFor, common_1.NgIf, common_1.NgClass],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClassOptionalComponent);
                return ClassOptionalComponent;
            })();
            exports_1("ClassOptionalComponent", ClassOptionalComponent);
        }
    }
});
//# sourceMappingURL=Component.js.map