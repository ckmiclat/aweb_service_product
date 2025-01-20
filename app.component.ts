import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-services-demo';

  public employees = [
    {
      id: 101,
      firstname: 'Joseph',
      lastname: 'Dizon',
      email: 'jdizon@hau.edu.ph',
        },
        {
      id: 102,
      firstname: 'James',
      lastname: 'Atienza',
      email: 'jatienza@hau.edu.ph',
        },
        {
          id: 103,
          firstname: 'John',
          lastname: 'Cena',
          email: 'jcena@hau.edu.ph',
        },
        {
          id: 104,
          firstname: 'Christian Kerr',
          lastname: 'Miclat',
          email: 'cnmiclat@hau.edu.ph',
        },
      ]
}


  // public employees: {
  //   id: number;
  //   firstname: string;
  //   lastname: string;
  //   email: string;
  // }[] = [];
  // private _employeeService: any;

  // constructor(private_employeeService: EmployeeService){}

  // ngOnInit(){
  //   this.employees = this._employeeService.getEmployees();
  // }
// }
  