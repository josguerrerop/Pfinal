import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import {HomeComponent} from './components/home/home.component'
import { ReportesComponent } from './components/reportes/reportes.component';
import { AlgoritmoComponent } from './components/algoritmo/algoritmo.component';
import { FlujoComponent } from './components/flujo/flujo.component';

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
      path:'reportes',
      component:ReportesComponent
    },
    {
      path:'Algoritmo',
      component:AlgoritmoComponent
    },
    {
      path:'flujo',
      component:FlujoComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }