

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { EmployeeComponent } from './components/employee/employee.component'; 

const routes: Routes = [{
  path: '',loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule),
},
{
  path:'**',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }