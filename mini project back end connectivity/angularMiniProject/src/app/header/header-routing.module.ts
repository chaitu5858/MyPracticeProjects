import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

 export const abcRoutes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:"full"},
  {path:'about-us',component:AboutUsComponent },
  {path:'contact-us',component:ContactUsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'company',loadChildren:()=>import('src/app/company/company.module').then(m=>m.CompanyModule)},
  {path:'employee',loadChildren:()=>import('src/app/employee/employee.module').then(e=>e.EmployeeModule)}
  
];

@NgModule({
  imports: [RouterModule.forChild(abcRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
