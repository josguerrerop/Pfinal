import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SideNavComponent } from './layout/side-nav-left/side-nav/side-nav.component';
import { SideNavClosedComponent } from './layout/side-nav-left/side-nav-closed/side-nav-closed.component';
import {MatCardModule} from '@angular/material/card'
@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    SideNavClosedComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatCardModule
  ]
})
export class AdminModule { }
