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
    var ProfileComponent;
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
            ProfileComponent = (function () {
                function ProfileComponent(http) {
                    this.list_course = [];
                    this.pf = new Service_1.ProfileService(http);
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    this.course = 1;
                    this.getList(this.course);
                };
                ProfileComponent.prototype.ngOnDestroy = function () {
                };
                ProfileComponent.prototype.getList = function (course_id) {
                    var _this = this;
                    this.pf.getList(course_id).subscribe(function (res) {
                        _this.list_course = res.json();
                    });
                };
                ProfileComponent.prototype.search = function () {
                    var _this = this;
                    if (this.query_search.length == 0) {
                        return false;
                    }
                    this.pf.find(this.query_search).subscribe(function (res) {
                        _this.searchlastquery = _this.query_search;
                        return _this.result_search = res.json();
                    });
                };
                ProfileComponent.prototype.toggleBind = function (pf_instance, user_id) {
                    if (pf_instance.subs === true) {
                        this.unlink(pf_instance, user_id);
                    }
                    else {
                        this.bind(pf_instance, user_id);
                    }
                };
                ProfileComponent.prototype.bind = function (pf_instance, user_id) {
                    var _this = this;
                    pf_instance.subs = true;
                    this.pf.bind(pf_instance.id, user_id).subscribe(function (res) {
                        _this.result_bind = res.json();
                    });
                };
                ProfileComponent.prototype.unlink = function (pf_instance, user_id) {
                    var _this = this;
                    pf_instance.subs = false;
                    this.pf.unlink(pf_instance.id, user_id).subscribe(function (res) {
                        _this.result_unlink = res.json();
                    });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        templateUrl: '/profile/',
                        viewProviders: [common_1.FORM_DIRECTIVES, Service_1.ProfileService, http_1.HTTP_PROVIDERS],
                        directives: [common_1.NgFor, common_1.NgIf, common_1.NgClass],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProfileComponent);
                return ProfileComponent;
            })();
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=Component.js.map