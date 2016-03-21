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
    var MediaService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MediaService = (function () {
                function MediaService(http) {
                    this.http = http;
                }
                MediaService.prototype.find = function (query_search) {
                    return this.http.get('media/search/' + query_search);
                };
                MediaService.prototype.bind = function (media_id, user_id) {
                    return this.http.get('media/bind?id=' + media_id + '&user_id=' + user_id);
                };
                MediaService.prototype.unlink = function (media_id, user_id) {
                    return this.http.get('media/unlink?id=' + media_id + '&user_id=' + user_id);
                };
                MediaService.prototype.getList = function (course_id) {
                    return this.http.get('media/bycourse/' + course_id);
                };
                MediaService = __decorate([
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MediaService);
                return MediaService;
            })();
            exports_1("MediaService", MediaService);
        }
    }
});
//# sourceMappingURL=Service.js.map