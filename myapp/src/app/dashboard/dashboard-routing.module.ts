import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import {HomeComponent} from './components/home/home.component'
const routes: Routes = [
{
  path: '',
  component: WrapperComponent,
  children: [
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'info',
      component:InfoComponent
    },
    {
      path:'user',
      component:UserComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }