import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private http: HttpClient) { }
URL = 'http://localhost:3000/logingoogle';

  postSocialLogin(socialData:any){
  return this.http.post(this.URL, socialData,{ observe: 'response' });
}
}
