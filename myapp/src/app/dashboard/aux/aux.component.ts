import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatlabService } from 'src/app/services/Matlab/matlab.service';
@Component({
  selector: 'app-aux',
  templateUrl: './aux.component.html',
  styleUrls: ['./aux.component.css']
})
export class AuxComponent implements OnInit {
  @Output() datos = new EventEmitter<any>();
  
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
  case:string='';


  constructor(private matlabService:MatlabService) { }

  ngOnInit(): void {
  }
 
  Algoritmo(self:any){
    this.matlabService.GetresAsync(self).subscribe(
      res => {
        this.data=res;
        localStorage.setItem('data', JSON.stringify(this.data));
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
        this.datos.emit(this.data)
      }
    )
  }


  SelectCase(caso:string):void{
    this.case= caso;
      this.matlabService.SelectCase(caso).subscribe(
        res=>{
         let data:any = res;
         data = data.self;
         this.Algoritmo(data);
      })
    }

}
