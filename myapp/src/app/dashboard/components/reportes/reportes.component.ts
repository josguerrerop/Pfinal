import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  
  view: any = [500, 300];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Tiempo';
  yAxisLabel: string = '% Carga atendida';
  timeline: boolean = true;
  showLegend: boolean = false;
  XA: string = 'Nodos';
  YA: string = '% Carga atendida';
  legendTitle: string = 'Years';
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  U1caseRD:number=0;
  U1caseGD:number=0;
  U1caseBASE:number=0;
  U1caseRDGD:number=0;
  obj:any;
  ngOnInit(): void{

  }

  onResize(event:any) {
    this.view = [event.target.innerWidth-20, 400];
}

setDatosNodos(){
  
  console.log(this.obj[0].x)
 let nodes:any = [];

  for(let i=0;i<this.obj[0].x.nodo1.length;i++){
  let obj = {
    "name": this.obj[0].x.nodo1[i][0],
    "series": [
      {
        "name": "Base",
        "value": this.obj[0].x.nodo1[i][5]
      },
      {
        "name": "GD",
        "value": this.obj[0].x.nodo2[i][5]
      },
      {
        "name": "RD Y GD",
        "value": this.obj[0].x.nodo3[i][5]
      },
      {
        "name": "RD",
        "value": this.obj[0].x.nodo4[i][5]
      },
    ]
  }
  nodes.push(obj);
}
this.nodos=nodes;

}

setDatos(event:any){
  this.obj=event;
this.U1caseRD=event[0].u[0]*100;
this.U1caseGD=event[0].u[1]*100;
this.U1caseBASE=event[0].u[3]*100;
this.U1caseRDGD=event[0].u[2]*100

this.multi = [
  {
    "name": "Original",
    "series": [
      {
        "name": "1",
        "value": 100
      },
      {
        "name": "2",
        "value": 100
      },
      {
        "name": "3",
        "value": 100
      }
    ]
  },

  {
    "name": "GD",
    "series": [
      {
        "name": "1",
        "value": 100
      },
      {
        "name": "2",
        "value": this.U1caseGD
      },
      {
        "name": "3",
        "value": this.U1caseGD
      }
    ]
  },

  {
    "name": "RD",
    "series": [
      {
        "name": "1",
        "value": 100
      },
      {
        "name": "2",
        "value": this.U1caseRD
      },
      {
        "name": "3",
        "value": this.U1caseRD
      }
    ]
  },
  {
    "name": "RD Y GD",
    "series": [
      {
        "name": "1",
        "value": 100
      },
      {
        "name": "2",
        "value": this.U1caseRDGD
      },
      {
        "name": "3",
        "value": this.U1caseRDGD
      }
    ]
  },
  {
    "name": "Base",
    "series": [
      {
        "name": "1",
        "value": 100
      },
      {
        "name": "2",
        "value": this.U1caseBASE
      },
      {
        "name": "3",
        "value": this.U1caseBASE
      }
    ]
  }
];
this.setDatosNodos();
}

multi:Object = [
  {
    "name": "Original",
    "series": [
      {
        "name": "1",
        "value": 100
      },
      {
        "name": "2",
        "value": 100
      },
      {
        "name": "3",
        "value": 100
      }
    ]
  }
];

 
  constructor() {
    //Object.assign(this, this.multi);
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  nodos:Object = [];


  
}
