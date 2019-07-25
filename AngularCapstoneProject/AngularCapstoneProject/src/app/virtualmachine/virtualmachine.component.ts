import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { VirtualMachine } from './virtualmachine';
import { vmService } from './virtualmachine.service';
//"use strict";

@Component({
    selector: 'my-vm',
    templateUrl:'app/virtualmachine/virtualmachine.component.html'
})

export class VirtualMachineComponent {
    
    subscriptionId = "";
    resourcegroupName = "";
    virtualmachineName = "";
    apiVersion = "";

    constructor(private vmservice: vmService) { }
   
     createvm() {
        let virtualmachine: VirtualMachine = {

            subscriptionId: this.subscriptionId,
            resourcegroupName:this.resourcegroupName,
            virtualmachineName:this.virtualmachineName,
            apiVersion:this.apiVersion
        };
        // uses instance of data access service to call createvm function
        this.vmservice.createvm(virtualmachine)
            .subscribe(
                success => alert("Done"),
                error => alert(error)
            );
       
    }
    
    //loadAllArticles() {
    //    //this.allVirtualMachines$ = this.vmService.getAllArticles();
    //}  
    
    //resourcegroupName: string;
    //virtualmachineName: string;
    //api-version: string;
    //createvm() {
    //    let virtualmachine: VirtualMachine = {
    //        subscriptionid: this.subscriptionid,
    //        resourcegroupName: this.,
    //        virtualmachineName: this.lastName,
    //        apiVersion: this.age,
           
    //    };
    //    // uses instance of data access service to call createTraveller function   
    //    this.dataAccess.createTraveller(traveller)
    //        .subscribe(
    //            success => alert("Done"),
    //            error => alert(error)
    //        );
    //}
}