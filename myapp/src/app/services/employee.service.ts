import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'http://localhost:3000/app/employees';

  //employees: Employee[];

  getEMployees(){
return this.http.get(this.URL_API); 
  }

  constructor(private http: HttpClient) { }

}