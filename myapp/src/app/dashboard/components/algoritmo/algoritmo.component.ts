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
  VectorInterdiccion:Array<Number>=[];
  PoblacionInterdiccion:Array<Number[]>=[];
  Vector_Interdiccion :any;
  case:string='';
   public pet:Boolean=false;
private URL1:Object={}

  constructor(private matlabService:MatlabService, private backService: BackendService,private dialogo:MatDialog) { }


  SelectCase(caso:string):void{
  this.case= caso;
    this.matlabService.SelectCase(caso).subscribe(
      res=>{
       let data:any = res;
       data = data.self;
       this.Algoritmo(data);
    })
  }



  ngOnInit(): void {
    
  }

   delay () {
    setTimeout(()=>{},5000)
}

  Algoritmo(self:any){
    this.matlabService.GetresAsync(self).subscribe(
      res => {
        this.data=res;
        this.arr=this.data.lhs[0].branch;
        this.bus=this.data.lhs[0].bus;
        this.gen=this.data.lhs[0].gen;
        this.genC=this.data.lhs[0].gencost;
        this.RD=this.data.lhs[1];
        this.Tam=this.data.lhs[2];
        this.Recursos=this.data.lhs[3];
        this.Ataque_Lineas=this.data.lhs[4];
        this.Ataque_Generadores=this.data.lhs[5];
        this.bar=false;
        console.log(res)
      }
    )
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
          Id:this.case
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
