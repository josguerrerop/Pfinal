import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxComponent } from '../../aux/aux.component';
@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css'],
})
export class AnalisisComponent implements OnInit {

  data:any;
 

  constructor() { }

  ngOnInit(): void {
    
  }

  realizaComunicacionHijo(event:any) {
    this.data = event;
    console.log(this.data)
  }
  
}
