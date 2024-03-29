"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json',
    })
};
var vmService = /** @class */ (function () {
    function vmService(http) {
        this.http = http;
        this.vmUrl = "https://capstoneazurewebapi.azurewebsites.net/api/Values/CreateVM"; // URL to WEB API
    }
    vmService.prototype.createvm = function (vm) {
        return this.http.post(this.vmUrl, JSON.stringify(vm), httpOptions);
    };
    vmService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], vmService);
    return vmService;
}());
exports.vmService = vmService;
//# sourceMappingURL=virtualmachine.service.js.map