import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/Backend/backend.service';
import { DialogComponent } from '../../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from "@angular/router"


@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.css']
})
export class FlujoComponent implements OnInit {

  constructor(private NodeService:BackendService,
    private dialogo:MatDialog,
    private router:Router,) {}

  base:Array<number[]>=[];
  RD:Array<number[]>=[];
  GD:Array<number[]>=[];
  RDGD:Array<number[]>=[];


  ngOnInit(): void {
    //this.NodeService.GuardarFlujo
  }

  getFlujos(event:any){
    if(event!=0){
      this.base=event.nodo1;
 this.GD=event.nodo2;
 this.RD=event.nodo4;
 this.RDGD=event.nodo3;
    }else{
      this.dialogo
      .open(DialogComponent, {
        data: `No se ha realizado analisis de vulnerabilidad para el caso seleccionado 
                   ¿Desea realizar Análisis de vulnerabilidad?`
      }).afterClosed().subscribe((confirmado) => {
        if(confirmado){
          this.router.navigate(['/Analisis'])
        }
      })
    }
 
  }
}
