import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {employeeList} from './employee-list';
import { Observable , of } from 'rxjs' 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() { }

  getEmployee():Observable<Employee[]> {
   return of(employeeList);
  }

  getEmployeeById(id:number ):Observable<Employee | any> {
    return of(employeeList.find(employee => employee.id === id ));
  }
}
