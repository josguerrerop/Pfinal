import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatlabService {


  private URL_CARACTERISTICAS = "http://localhost:9911/entrada/entrada?mode=async";
  
  private URL_ALGORITMO = "http://localhost:9909/poblacion/poblacion";
  //

  constructor(private http: HttpClient) { }



GetresAsync(self:string){
  let URL:string="http://localhost:9911"+self+"/result";
  return this.http.get(URL);
}

  SelectCase(caso:string){
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
                   "outputFormat":{ "mode" : "small", "nanInfFormat" : "object" }
     }); 
    }
}
