import { Component, OnInit } from '@angular/core';
import { MatlabService } from 'src/app/services/Matlab/matlab.service';

@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.css']
})
export class AlgoritmoComponent implements OnInit {
   data:any;

   caso =[
     {val:'Cinco'},
     {val:'Veinticuatro'}
   ];

   arr:Array<Number[]>=[];

  constructor(private matlabService:MatlabService) { }

 Seleccion(){

 }

  ngOnInit(): void {
    console.log(200)
    this.matlabService.SelectCase("cinco").subscribe(
      res => {
        this.data=res;
        this.arr=this.data.lhs[0].branch;
        console.log(this.arr);
      }
    );
    
  }

}
