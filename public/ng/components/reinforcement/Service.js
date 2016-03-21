System.register(['angular2/core', 'angular2/http'], function(exports_1) {
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
    var core_1, http_1;
    var ReinforcementService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ReinforcementService = (function () {
                function ReinforcementService(http) {
                    this.http = http;
                }
                ReinforcementService.prototype.find = function (query_search) {
                    return this.http.get('reinforcement/search/' + query_search);
                };
                ReinforcementService.prototype.bind = function (reinforcement_id, user_id) {
                    return this.http.get('reinforcement/bind?id=' + reinforcement_id + '&user_id=' + user_id);
                };
                ReinforcementService.prototype.unlink = function (reinforcement_id, user_id) {
                    return this.http.get('reinforcement/unlink?id=' + reinforcement_id + '&user_id=' + user_id);
                };
                ReinforcementService.prototype.getList = function (course_id) {
                    return this.http.get('reinforcement/bycourse/' + course_id);
                };
                ReinforcementService = __decorate([
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ReinforcementService);
                return ReinforcementService;
            })();
            exports_1("ReinforcementService", ReinforcementService);
        }
    }
});
//# sourceMappingURL=Service.js.map