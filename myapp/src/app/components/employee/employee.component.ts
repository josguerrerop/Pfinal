import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeService: EmployeeService) { }

  ngOnInit(): void {
  }

  getEmployees(){
    this.employeService.getEMployees().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
