import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { SocketIoComponent } from './components/socket-io/socket-io.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    //EmployeeComponent,
    //SocketIoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
