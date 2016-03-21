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
    var WarningComponent;
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
            WarningComponent = (function () {
                function WarningComponent(http) {
                    this.list_course = [];
                    this.wr = new Service_1.WarningService(http);
                }
                WarningComponent.prototype.ngOnInit = function () {
                    this.course = 1;
                    this.getList(this.course);
                };
                WarningComponent.prototype.getList = function (course_id) {
                    var _this = this;
                    this.wr.getList(course_id).subscribe(function (res) {
                        _this.list_course = res.json();
                    });
                };
                WarningComponent.prototype.search = function () {
                    var _this = this;
                    if (this.query_search.length == 0) {
                        return false;
                    }
                    this.wr.find(this.query_search).subscribe(function (res) {
                        _this.query_search_last = _this.query_search;
                        return _this.result_search = res.json();
                    });
                };
                WarningComponent = __decorate([
                    core_1.Component({
                        selector: 'warning',
                        templateUrl: '/warning/list',
                        viewProviders: [common_1.FORM_DIRECTIVES, Service_1.WarningService, http_1.HTTP_PROVIDERS],
                        directives: [common_1.NgFor, common_1.NgIf, common_1.NgClass],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WarningComponent);
                return WarningComponent;
            })();
            exports_1("WarningComponent", WarningComponent);
        }
    }
});
//# sourceMappingURL=Component.js.map