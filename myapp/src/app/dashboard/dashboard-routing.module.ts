import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';

import { ReportesComponent } from './components/reportes/reportes.component';
import { AlgoritmoComponent } from './components/algoritmo/algoritmo.component';
import { FlujoComponent } from './components/flujo/flujo.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
const routes: Routes = [
{
  path: '',  
  component: WrapperComponent,
  children: [
    {
      path:'reportes',
      component:ReportesComponent
    },
    {
      path:'Algoritmo',
      component:AlgoritmoComponent
    },
    {
      path:'Flujo',
      component:FlujoComponent
    },
    {
      path:'Analisis',
      component:AnalisisComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }