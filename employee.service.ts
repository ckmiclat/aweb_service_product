import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [ 
      {
      id: 101,
      firstname: 'Joseph',
      lastname: 'Dizon',
      email:'jdizon@hau.edu.ph',
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
      email: 'cnmiclat@student.hau.edu.ph',
      },
    ];
  }
}