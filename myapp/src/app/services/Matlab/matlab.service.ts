import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatlabService {


  private URL_CARACTERISTICAS = "http://localhost:9910/entrada/entrada?mode=async";
  private URL_ALGORITMO = "http://localhost:9910/poblacion/poblacion";
  
  private URL_S ="http://localhost:9910/~6e02029f-4fdc-4ef2-90f1-46e58cdc0424/requests/cebe6f1c-9b09-445d-b2f1-9168338c63a5/result"
  constructor(private http: HttpClient) { }

getRun(){
  return this.http.get(this.URL_S);
}


  SelectCase(caso:string){
    console.log(caso)
    return this.http.post(this.URL_CARACTERISTICAS,{ "nargout": 6,
    "rhs": [caso],
    "outputFormat":{ "mode" : "small", "nanInfFormat" : "string" }
    
     }); 
    }
    

    GenerarVector(caso:Object,
                  RD:Array<Number[]>,
                  Tam:Number,
                  Recursos:Number,
                  Ataque_Lineas:Array<Number[]>,
                  Ataque_Generadores:Array<Number[]>
                  )
                  {
                    return this.http.post(this.URL_ALGORITMO,{ "nargout": 3,
                   "rhs": [caso,RD,[Tam],[Recursos],Ataque_Lineas,Ataque_Generadores],
                   "outputFormat":{ "mode" : "small", "nanInfFormat" : "string" }
     }); 
    }
}
