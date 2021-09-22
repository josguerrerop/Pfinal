import { Component, OnInit } from '@angular/core';
import { MatlabService } from 'src/app/services/Matlab/matlab.service';
import {MatDialog} from '@angular/material/dialog';
import { PobInterdiccionComponent } from './pob-interdiccion/pob-interdiccion.component';
import { ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.css']
})

export class AlgoritmoComponent implements OnInit {
  @ViewChild('tabs') tabGroup!: MatTabGroup;


 spinner:boolean = false;
   data:any;
   bar:boolean= false;
   caso =[
     {val:'cinco'},
     {val:'Veinticuatro'}
   ];

   arr:Array<Number[]>=[];
   bus:Array<Number[]>=[];
   gen:Array<Number[]>=[];
   genC:Array<Number[]>=[];
   RD:Array<Number[]>=[];
   Tam:Number=0;
   Recursos:Number=0;
   Ataque_Lineas:Array<Number[]>=[];
   Ataque_Generadores:Array<Number[]>=[];
   

  constructor(private matlabService:MatlabService, private dialogo:MatDialog) { }


SelectCase(caso:string):void{
  this.bar=true;
  this.matlabService.SelectCase(caso).subscribe(
    res => {
      console.log(res)
      //this.data=res;
      //this.arr=this.data.lhs[0].branch;
      //this.bus=this.data.lhs[0].bus;
      //this.gen=this.data.lhs[0].gen;
      //this.genC=this.data.lhs[0].gencost;
      //this.RD=this.data.lhs[1];
      //this.Tam=this.data.lhs[2];
      //this.Recursos=this.data.lhs[3];
      //this.Ataque_Lineas=this.data.lhs[4];
      //this.Ataque_Generadores=this.data.lhs[5];
      //console.log(this.data);
      this.bar=false;
    }
  );
}

  ngOnInit(): void {
   this.matlabService.getRun().subscribe(res=>{
     console.log(res)
   });
  }

  GenerarVector():void{
    this.dialogo
    .open(PobInterdiccionComponent, {
      data: `¿Desea generar vector de interdicción?`
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (confirmado) {
        this.spinner=true;
        this.tabGroup.selectedIndex = 1;
        this.matlabService.GenerarVector(
          this.data.lhs[0],
          this.RD,
          this.Tam,
          this.Recursos,
          this.Ataque_Lineas,
          this.Ataque_Generadores).subscribe(
            res=>{
              console.log(res)
            }
          );
          this.spinner=false;
      } else {
       
      }
    });
  }



}
