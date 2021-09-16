import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatlabService {


  private URL_CARACTERISTICAS = "http://localhost:9910/entrada/entrada";

  constructor(private http: HttpClient) { }

  SelectCase(caso:string){
    return this.http.post(this.URL_CARACTERISTICAS,{ "nargout": 5,
    "rhs": [caso],
    "outputFormat":{ "mode" : "small", "nanInfFormat" : "string" }
    
     }); 
    }
}
