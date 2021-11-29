import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private URI1 = "http://localhost:3000/ALgoritmoG/";
  private URI2 = "http://localhost:3000/ALgoritmoG/Vector";
  private URL_FLUJO ="http://localhost:3000/ALgoritmoG/Results";
  private URL_FLUJOS ="http://localhost:3000/ALgoritmoG/Flujo";

  ServicioAG(Vector:Object){
    return this.http.post(this.URI1 ,{Vector});
  }

  ConsultarVector(caso:string){
    return this.http.post(this.URI2 ,{caso});
  }

  GuardarFlujo(obj:object){
    return this.http.post(this.URL_FLUJO ,{obj});

  }

  GetFlujo(caso:string){
    return this.http.post(this.URL_FLUJOS ,{caso});
  }

  constructor(private http: HttpClient) { }
}
