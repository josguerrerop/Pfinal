import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatlabService } from 'src/app/services/Matlab/matlab.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/Backend/backend.service';
@Component({
  selector: 'app-aux',
  templateUrl: './aux.component.html',
  styleUrls: ['./aux.component.css']
})
export class AuxComponent implements OnInit {
  @Output() datos = new EventEmitter<any>();
  
  private data:any;
  bar:boolean= false;
  caso =[
    {val:'5'},
    {val:'6'},
    {val:'9'},
    {val:'12'},
    {val:'14'},
    {val:'15'},
    {val:'18'},
    {val:'22'},
    {val:'24'},
    {val:'30'},
    {val:'33'},
    {val:'34'},
    {val:'38'},
    {val:'39'},
    {val:'51'},
    {val:'57'},
    {val:'69'},
    {val:'74'},
    {val:'118'},
    {val:'141'},
    {val:'300'},
    {val:'1354'},
  ];

  constructor(private matlabService:MatlabService,
              private location: Location, 
              ) { }

  ngOnInit(): void {
    if(this.location.path() != ''){
      console.log(this.location.path());
    } 
  }

  private getVectores(caso:string):any{
    this.matlabService.SelectCase(parseInt(caso)).subscribe(
      res=>{
        this.data=res;
        let obj:object = {
          poblacion:this.data.lhs[7],
          vector:this.data.lhs[6]
         }
         this.datos.emit(obj)
    })
  }

  private getEntradas(caso:string):any{
    this.matlabService.SelectCase(parseInt(caso)).subscribe(
      res=>{
        this.data=res;
        let datos:object={
          branch:this.data.lhs[0].branch,
          bus:this.data.lhs[0].bus,
          gen:this.data.lhs[0].gen,
          genC:this.data.lhs[0].gencost,
          RD:this.data.lhs[1],
          Tam:this.data.lhs[2],
          Recursos:this.data.lhs[3],
          Ataque_Lineas:this.data.lhs[4],
          Ataque_Generadores:this.data.lhs[5]
        }
        this.datos.emit(datos)
    })
  }

  SelectCase(caso:string):void{
    
      if(this.location.path()=='/Analisis'){
        this.getVectores(caso);
    }

    else 

    if(this.location.path()=='/Algoritmo'){
      this.getEntradas(caso);
    }   
  }
}
