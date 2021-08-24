

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component'; 

const routes: Routes = [
  {path: 'x', component: EmployeeComponent },
  {path: '**',loadChildren: () => import('./admin/admin-routing.module')}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }