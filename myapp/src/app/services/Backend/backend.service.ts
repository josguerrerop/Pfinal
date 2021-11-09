import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private URI1 = "http://localhost:3000/ALgoritmoG/";

  ServicioAG(Vector:Object){
    return this.http.post(this.URI1 ,{Vector});
  }


  constructor(private http: HttpClient) { }
}
