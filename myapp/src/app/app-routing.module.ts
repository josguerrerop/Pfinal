

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardModule } from './dashboard/dashboard.module';
//import { EmployeeComponent } from './components/employee/employee.component'; 

const routes: Routes = [
  {
  path: 'das',
  //component:DashboardModule,
  loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
},
 {
  path: '**',
  redirectTo:'',
  pathMatch: 'full'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }