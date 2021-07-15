import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {NgForm} from '@angular/forms'
import { Employee } from "../../models/employee";

import { Router , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeService: EmployeeService , public act: ActivatedRoute) { }

  ngOnInit(): void {
console.log('x')
  }

  
  
  Execute():void{
    this.employeService.getEMployees().subscribe(
      res => {
        this.employeService.data=res
        this.employeService.saving();  
      }
    )
  }
}


/*
  

  addEmployee(form: NgForm){
  this.employeService.createEmployee(form.value).subscribe(
  res => {
  this.getEmployes();
  form.reset();
  },
  err => console.log(err)
  )
  }

  
 
  deleteEmployee(_id: string | undefined) {
    console.log(_id)
    if (confirm("Are you sure you want to delete it?")) {
   this.employeService.deleteEmploye(_id);
   this.getEmployes();
        
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      //this.employeeService.selectedEmployee = new Employee();
    }
  }

  editEmployee(employee: Employee){
  this.employeService.selectedEmployee = employee;
  }
}

*/


