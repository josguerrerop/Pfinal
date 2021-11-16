import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/services/Backend/backend.service';
import { MatlabService } from 'src/app/services/Matlab/matlab.service';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css'],
})
export class AnalisisComponent implements OnInit {

  data:any;
  title:any='';
  pob:any='';
  vec:any;
  results:any;
  resultados:Array<number[]>=[];
  elemento:Array<number>=[];
  constructor(private back:BackendService,private Matlab:MatlabService) { }
  
  ngOnInit(): void {
    
  }

  RealizarAnalisis(){
    this.Matlab.RealizarAnalisis(
      this.data.lhs[0]
      ,this.data.lhs[1],
      this.title,
      this.pob
      ).subscribe(
      res=>{
        this.results=res;
        for(let i=0;i<4;i++){
          let cost_tot=this.results.lhs[0].mwdata[i].Cost_tot;
          let cost_des=this.results.lhs[0].mwdata[i].Cost_des;
          let u=this.results.lhs[0].mwdata[i].U;
          let u1=this.results.lhs[0].mwdata[i].U1;
          let u2=this.results.lhs[0].mwdata[i].U2;
          this.elemento=[cost_tot,cost_des,u1,u2,u];
          this.resultados.push(this.elemento);
        }
        let aux=this.resultados[2];
        this.resultados[2]=this.resultados[3];
        this.resultados[3]=aux
        //console.log(res)
        this.GetNodos()
      }
    )
  }

 GetNodos(){
   let nodo1= this.results.lhs[0].mwdata[0].nodos;
   let nodo2= this.results.lhs[0].mwdata[1].nodos;
   let nodo3= this.results.lhs[0].mwdata[3].nodos;
   let nodo4= this.results.lhs[0].mwdata[2].nodos;
   let caso =this.data.caso;
   let obj ={
  nodo1,
  nodo2,
  nodo3,
  nodo4,
  caso
   }
   this.back.GuardarFlujo(obj).subscribe(res=>{
    
   })
   console.log(obj)
 }


  realizaComunicacionHijo(event:any) {
    this.data = event;
      this.back.ConsultarVector(this.data.caso).subscribe(
        res => {
          this.vec = res;
          this.title = this.vec[0].x;
          this.pob=this.vec[0].p;
          
        }
      )
  }
  
}
