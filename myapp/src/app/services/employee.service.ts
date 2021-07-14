import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  data: any;
  URL_API = "http://localhost:9911/pruebas/pruebas";

  URL_NJS = "http://localhost:3000";
  
  saving() {
    return this.http.post(this.URL_NJS,this.data);
  }
  getEMployees(){
  return this.http.post(this.URL_API,{"rhs": [5] ,"nargout": 1}); 
  }
  constructor(private http: HttpClient) {}
}





  //createEmployee(employee : Employee){
   //return this.http.post(this.URL_API,employee)
  //}

  /*
  deleteEmploye(_id: string | undefined) {
    return this.http.delete(this.URL_API + `/${_id}`).subscribe(
      res => {
       this.getEMployees();
      },
       (err) => console.log(err)
    );
  }
*/
  