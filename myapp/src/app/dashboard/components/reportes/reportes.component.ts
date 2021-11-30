import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  
  view: any = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'tiempo';
  yAxisLabel: string = 'carga atendida';
  timeline: boolean = true;
  showLegend: boolean = true;
  XA: string = 'Country';
  YA: string = 'Population';
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

  ngOnInit(): void{

  }

setDatos(event:any){
console.log(event)
this.U1caseRD=event[0].u[0]
this.U1caseGD=event[0].u[1]
this.U1caseBASE=event[0].u[3]
this.U1caseRDGD=event[0].u[2]
}

  setGraficas():Array<Object>{
    let arr:Array<Object> = [];
    
   return arr;
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


  nodos:Object = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];

  constructor() {
    Object.assign(this, this.multi);
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

  

}
