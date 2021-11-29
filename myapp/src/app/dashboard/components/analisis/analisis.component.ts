import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/services/Backend/backend.service';
import { MatlabService } from 'src/app/services/Matlab/matlab.service';


@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css'],
})
export class AnalisisComponent implements OnInit {

  vector:any='';
  nuevoVec:any='';
  poblacion:any='';
  case:string='';
  results:any;
  caso:any;
  RD:any;
  resultados:Array<number[]>=[];
  elemento:Array<number>=[];
  escenario:any=["BASE","GD","RD","RD Y GD"];
  lineasAtacas:any;
  generadores:any;
  mensaje1:string='';
  mensaje2:string='';

  Costooperacion:number=0;
  Costodeslastre:number=0;
  U1:number=0;
  U2:number=0;
  U3:number=0;
  mensaje3:String='';


 
  

  constructor(private back:BackendService,
              private Matlab:MatlabService,
              
              ) { }
  
  ngOnInit(): void {
    
  }


Resilencia(number:any):string{
let resilencia:string='';

if(number<=0.1000 || number<0.5000){
  resilencia ="Mala"
}
else

if(number>=0.5000 && number <0.7000){
  resilencia ="Regular"
}
else
if(number>=0.7000 ){
  resilencia = "Buena"
}
return resilencia;
}

recuperacion(result:any){
  this.nuevoVec=result.lhs[2].mwdata[0][0];
  //this.mensaje1=result.lhs[2].mwdata[2].mwdata[0].mwdata[0];
  this.mensaje2=result.lhs[2].mwdata[2].mwdata[1];
  this.mensaje1 = this.mensaje1+" "+this.mensaje2;
  this.mensaje3 = this.results.lhs[2].mwdata[3].mwdata[0];
  this.Costooperacion=this.results.lhs[2].mwdata[1].Cost_tot
  this.Costodeslastre=this.results.lhs[2].mwdata[1].Cost_des
  this.U1=this.results.lhs[2].mwdata[1].U1
  this.U2=this.results.lhs[2].mwdata[1].U2
  this.U3=this.results.lhs[2].mwdata[1].U
  console.log(this.Costooperacion,this.Costodeslastre,this.U1,this.U3,this.U2)
}


  RealizarAnalisis(){
    this.Matlab.RealizarAnalisis(
      this.caso,
      this.RD,
      this.vector,
      this.poblacion
      ).subscribe(
      res=>{
        this.results=res;
        
        console.log(res)
        this.lineasAtacas=this.results.lhs[1].mwdata[0].mwdata;
        this.generadores=this.results.lhs[1].mwdata[1].mwdata;
        for(let i=0;i<4;i++){
          let cost_tot=this.results.lhs[0].mwdata[i].Cost_tot;
          let cost_des=this.results.lhs[0].mwdata[i].Cost_des;
          let u=this.results.lhs[0].mwdata[i].U;
          let u1=this.results.lhs[0].mwdata[i].U1;
          let u2=this.results.lhs[0].mwdata[i].U2;

          this.elemento=[
            "Escenario "+this.escenario[i],
          cost_tot.toFixed(4),
          cost_des.toFixed(4),
          u1.toFixed(4),
          u2.toFixed(4),
          u.toFixed(4),
          this.Resilencia(u1.toFixed(4))
        ];

          this.resultados.push(this.elemento);
        }
        let aux=this.resultados[2];
        let Auxstr=this.resultados[3][0]

        this.resultados[2]=this.resultados[3];
        this.resultados[3]=aux;

        this.resultados[2][0]=this.resultados[3][0]
        this.resultados[3][0]=Auxstr
      
        this.recuperacion(this.results);
        this.GetNodos();
      }
    )
  }

 GetNodos(){
   let nodo1= this.results.lhs[0].mwdata[0].nodos;
   let nodo2= this.results.lhs[0].mwdata[1].nodos;
   let nodo3= this.results.lhs[0].mwdata[3].nodos;
   let nodo4= this.results.lhs[0].mwdata[2].nodos;
   let caso =this.case;
   let obj ={
  nodo1,
  nodo2,
  nodo3,
  nodo4,
   }


   this.back.GuardarFlujo({obj,caso}).subscribe(res=>{});
   console.log(obj)
 }


  realizaComunicacionHijo(event:any) {
    this.case=event.case;
    this.caso=event.caso;
    this.RD=event.RD;
    console.log(event)
   

    this.back.ConsultarVector(this.case).subscribe(
      res=>{
        let obj:any =res;
        this.vector = obj[0].x;
        this.poblacion=obj[0].p;
      }
    )
  }
  
}
