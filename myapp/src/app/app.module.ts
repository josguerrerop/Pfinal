import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';

import {FormsModule} from '@angular/forms';
<<<<<<< HEAD
import { SocketIoComponent } from './components/socket-io/socket-io.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    //EmployeeComponent,
    //SocketIoComponent
=======
import { AppRoutingModule } from './app-routing.module';
//import { SocketIoComponent } from './components/socket-io/socket-io.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
    //AppRoutingModule
    //SocketIoComponent,
    //DetailsComponent,
   // AppRoutingModule
>>>>>>> e5bb85c91af2600905b23c12b0ca45a150a2c1ad
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    FontAwesomeModule,
=======
>>>>>>> e5bb85c91af2600905b23c12b0ca45a150a2c1ad
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
