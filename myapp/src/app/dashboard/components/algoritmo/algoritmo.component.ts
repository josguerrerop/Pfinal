import { Component, OnInit } from '@angular/core';
import { MatlabService } from 'src/app/services/Matlab/matlab.service';
import {MatDialog} from '@angular/material/dialog';
import { PobInterdiccionComponent } from './pob-interdiccion/pob-interdiccion.component';
import { ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs'; 
import { BackendService } from 'src/app/services/Backend/backend.service';
@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.css']
})

export class AlgoritmoComponent implements OnInit {
  
  @ViewChild('tabs') tabGroup!: MatTabGroup;


 spinner:boolean = false;
   data:any;
   resultado:any;
   bar:boolean= false;


   branch:Array<Number[]>=[];
   bus:Array<Number[]>=[];
   gen:Array<Number[]>=[];
   genC:Array<Number[]>=[];
   RD:Array<Number[]>=[];
   Tam:Number=0;
   Recursos:Number=0;
   Ataque_Lineas:Array<Number[]>=[];
   Ataque_Generadores:Array<Number[]>=[];

   VectorInterdiccion:Array<Number>=[];
   PoblacionInterdiccion:Array<Number[]>=[];
   Vector_Interdiccion :any=[];
   Pob_Interdiccion :any=[[Number]];

  case:string='';
   public pet:Boolean=false;


  constructor(private matlabService:MatlabService,
              private backService: BackendService,
              private dialogo:MatDialog,
            
              ) { }

  ngOnInit(): void {
  
  }

   delay () {
    setTimeout(()=>{},5000)
}

getEntradas(event:any){
this.branch=event.branch;
this.bus=event.bus;
this.gen=event.gen;
this.genC=event.genC;
this.RD=event.RD;
this.Tam=event.Tam;
this.Recursos=event.Ataque_Lineas;
this.Ataque_Lineas =event.Ataque_Lineas;
this.Ataque_Generadores=event.Ataque_Generadores;
}

  tr(){
    this.spinner=true;
    let startFrom = new Date().getMinutes();
    this.matlabService.GenerarVector(
      this.data.lhs[0],
      this.RD,this.Tam,
      this.Recursos,this.Ataque_Lineas,this.Ataque_Generadores)
      .subscribe(
        res=>{
          try {
            let data: any;
            data=res;
            this.Vector_Interdiccion = data.lhs[0];
            this.Pob_Interdiccion = data.lhs[1];
          console.log(res);
          console.log(new Date().getMinutes()- startFrom);
          this.spinner=false;
          } catch(err){
            alert(err);
          }finally{
            this.preguntar();
          }
        });
  }

preguntar(){
  this.delay()
  this.dialogo
    .open(PobInterdiccionComponent, {
      data: `¿Desea guardar resultados?`
    }).afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        let obj:Object = {
          x:this.Vector_Interdiccion,
          p:this.Pob_Interdiccion,
          caso:this.case
        }
console.log(obj)
        this.backService.ServicioAG(obj).subscribe(
         res =>{
          console.log(res)
         }
        )
      }
    });
}

  GenerarVector():void{
    this.dialogo
    .open(PobInterdiccionComponent, {
      data: `¿Desea generar vector de interdicción?`
    }).afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        this.tabGroup.selectedIndex = 1;
        this.tr();
      }
    });
  }



}
