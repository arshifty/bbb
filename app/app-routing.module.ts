import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";

const routes: Routes = [
  {
    path: "employee",
    component: EmployeeComponent,
  },
  {
    path: "detail/:id",
    component: EmployeeDetailsComponent,
  },
  {
    path: "reactiveform",
    component: ReactiveformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
