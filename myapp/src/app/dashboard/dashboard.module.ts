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
import { LoginComponent } from './components/login/login.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { AlgoritmoComponent } from './components/algoritmo/algoritmo.component';
import { FlujoComponent } from './components/flujo/flujo.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { AuxComponent } from './aux/aux.component';
import {MatMenuModule} from '@angular/material/menu';
import { DialogComponent } from './dialog/dialog.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';




@NgModule({
  declarations: [
    WrapperComponent,
    LoginComponent,
    ReportesComponent,
    AlgoritmoComponent,
    FlujoComponent,
    AnalisisComponent,
    AuxComponent,
    DialogComponent,
  ],
  imports: [
    NgxChartsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    //BrowserAnimationsModule, 
    
  ],
})
export class DashboardModule { }
