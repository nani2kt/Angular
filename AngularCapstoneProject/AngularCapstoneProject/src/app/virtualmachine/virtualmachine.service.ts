import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { VirtualMachine } from './virtualmachine';
import { VirtualMachineComponent } from './virtualmachine.component';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
       })
};
@Injectable()
export class vmService {
    vmUrl = "https://capstoneazurewebapi.azurewebsites.net/api/Values/CreateVM"; // URL to WEB API
    constructor(private http: HttpClient) { }
    
  
    
    createvm(vm: VirtualMachine): Observable<VirtualMachine> {
        return this.http.post<VirtualMachine>(this.vmUrl, JSON.stringify(vm), httpOptions);
    }
}