import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent,
children:[
  {path:'employee-list',component:EmployeeListComponent,
 children:[
   {path:'update',component:UpdateComponent},
   {path:'employeedetail/:id',component:EmployeeDetailsComponent}
 ]
}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
