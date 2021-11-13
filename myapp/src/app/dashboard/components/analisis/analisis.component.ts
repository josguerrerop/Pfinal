import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css'],
})
export class AnalisisComponent implements OnInit {

  data:any;
  title:any='Vector de interdicción';

  constructor() { }

  ngOnInit(): void {
    
  }

  realizaComunicacionHijo(event:any) {
    this.data = event;
    console.log(this.data)
  }
  
}
