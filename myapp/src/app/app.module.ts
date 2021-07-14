import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';

import {FormsModule} from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
