import { Component } from '@angular/core';

@Component({
   selector: 'my-app',
    template: `<div>
                        <h1>{{pageHeader}}</h1>
                        <my-vm></my-vm>
                </div>`

})
export class AppComponent  {
    pageHeader :string= 'CREATE A VIRTUAL MACHINE';
}
