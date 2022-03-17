import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private URI1 = "http://localhost:3000/ALgoritmoG/";
  private getVector = "http://localhost:3000/Vector";
  private URL_FLUJO ="http://localhost:3000/Results";
  private urlGetflujo ="http://localhost:3000/Flujo";

  ServicioAG(Vector:Object){
    return this.http.post(this.URI1 ,{Vector});
  }

  consultarVector(caso:string){
    return this.http.post(this.getVector ,{caso});
  }

  GuardarFlujo(obj:object){
    return this.http.post(this.URL_FLUJO ,{obj});

  }

  getFlujo(caso:string){
    return this.http.post(this.urlGetflujo ,{caso});
  }

  constructor(private http: HttpClient) { }
}
