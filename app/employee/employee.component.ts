import { Component, OnInit } from '@angular/core';
import {Employee } from '../employee';
import { employeeList  } from '../employee-list';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employes : any;
  selected_employee: any;
  val : any;

  constructor( private employeeService: EmployeeService ) { }

  ngOnInit(): void {
    this.employes = employeeList;
    this.getEmployee();
  }

  employee : Employee = {
    "id": 1,
    "name": "Ashif Rahman",
    "school": "KGHS",
    "contact": 333
  }
   
  SelectedEmployee(employee :Employee)  {
   this.selected_employee = employee;
   console.log(employee);
  }

  getEmployee() {
    this.employeeService.getEmployee().subscribe(res=>this.val=res);
  }
}
