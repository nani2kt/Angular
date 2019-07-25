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
var virtualmachine_service_1 = require("./virtualmachine.service");
//"use strict";
var VirtualMachineComponent = /** @class */ (function () {
    function VirtualMachineComponent(vmservice) {
        this.vmservice = vmservice;
        this.subscriptionId = "";
        this.resourcegroupName = "";
        this.virtualmachineName = "";
        this.apiVersion = "";
    }
    VirtualMachineComponent.prototype.createvm = function () {
        var virtualmachine = {
            subscriptionId: this.subscriptionId,
            resourcegroupName: this.resourcegroupName,
            virtualmachineName: this.virtualmachineName,
            apiVersion: this.apiVersion
        };
        // uses instance of data access service to call createvm function
        this.vmservice.createvm(virtualmachine)
            .subscribe(function (success) { return alert("Done"); }, function (error) { return alert(error); });
    };
    VirtualMachineComponent = __decorate([
        core_1.Component({
            selector: 'my-vm',
            templateUrl: 'app/virtualmachine/virtualmachine.component.html'
        }),
        __metadata("design:paramtypes", [virtualmachine_service_1.vmService])
    ], VirtualMachineComponent);
    return VirtualMachineComponent;
}());
exports.VirtualMachineComponent = VirtualMachineComponent;
//# sourceMappingURL=virtualmachine.component.js.map