import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from '@angular/router'


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'
import { VirtualMachineComponent } from './virtualmachine/virtualmachine.component'
import { vmService } from './virtualmachine/virtualmachine.service'
@NgModule({
    imports: [BrowserModule, HttpClientModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, VirtualMachineComponent],
    bootstrap: [AppComponent],
    providers: [vmService]
})
export class AppModule { }
