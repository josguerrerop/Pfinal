import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(
    private Service : EmployeeService
  ) { }

  ngOnInit(): void {
    this.Execute();
  }

  Execute():void{
    this.Service.getEMployees().subscribe(
      res => {
        this.Service.data=res
        console.log(res)
      }
    )
  }

}
