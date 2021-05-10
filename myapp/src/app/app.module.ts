import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import {FormsModule} from '@angular/forms';
import { SocketIoComponent } from './components/socket-io/socket-io.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SocketIoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
