import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { InfoComponent } from './components/info/info.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import  {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    WrapperComponent,
    InfoComponent,
    DashboardComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers:[]
})
export class DashboardModule { }