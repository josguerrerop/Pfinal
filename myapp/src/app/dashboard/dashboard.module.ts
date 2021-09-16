import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import  {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'
import {MatFormFieldModule} from '@angular/material/form-field'
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { AlgoritmoComponent } from './components/algoritmo/algoritmo.component';
import { FlujoComponent } from './components/flujo/flujo.component';


@NgModule({
  declarations: [
    WrapperComponent,
    HomeComponent,
    LoginComponent,
    ReportesComponent,
    AlgoritmoComponent,
    FlujoComponent,
  ],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule
  ],
})
export class DashboardModule { }
