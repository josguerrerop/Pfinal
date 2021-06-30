import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'http://localhost:3000/app/employees';

  employees: Employee[] = [];
    

  selectedEmployee: Employee ={
    name : '',
    office: '',
    position: '',
    salary: 1,
    
  };

  getEMployees(){
return this.http.get<Employee[]>(this.URL_API); 
  }

  createEmployee(employee : Employee){
   return this.http.post(this.URL_API,employee)
  }

  
  deleteEmploye(_id: string | undefined) {
    return this.http.delete(this.URL_API + `/${_id}`).subscribe(
      res => {
       this.getEMployees();
      },
       (err) => console.log(err)
    );
  }

  constructor(private http: HttpClient) {
    
   }
  
}