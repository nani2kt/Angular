import {Component} from '@angular/core'


@Component({
    selector: 'my-employee',
    templateUrl:'app/employee/employee.component.html'
})

export class EmployeeComponent {
    firstname: string = 'Tom';
    lastname: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
}