import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeService: EmployeeService) { }

  ngOnInit(): void {
  this.getEmployes();
  }

  getEmployes(){
    this.employeService.getEMployees().subscribe(
      res => {this.employeService.employees= res},
      err => console.log(err)
    )
  }

}
