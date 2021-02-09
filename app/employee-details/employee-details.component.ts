import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { from } from "rxjs";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetails: any;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployeeDetails();
  }
  
  getEmployeeDetails() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.employeeService.getEmployeeById(id).subscribe((res) => (this.employeeDetails = res));
  }
}
