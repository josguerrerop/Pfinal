import { Component, OnInit } from '@angular/core';
import { MatlabService } from 'src/app/services/Matlab/matlab.service';
import { BackendService } from 'src/app/services/Backend/backend.service';

@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.css']
})
export class FlujoComponent implements OnInit {

  constructor(private NodeService:BackendService) {}

  base:Array<number[]>=[];
  RD:Array<number[]>=[];
  GD:Array<number[]>=[];
  RDGD:Array<number[]>=[];


  ngOnInit(): void {
    //this.NodeService.GuardarFlujo
  }

  getFlujos(event:any){
 this.base=event.nodo1;
 this.GD=event.nodo2;
 this.RD=event.nodo4;
 this.RDGD=event.nodo3;
console.log(this.base,this.RD,this.GD,this.RDGD)
  }
}
