import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import  {io} from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketioService {
socket: any;
readonly URL = 'ws://localhost:3000';
  constructor() {
    this.socket= io(this.URL,{
      withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
    });
   }

   listen(eventName: string){
     return new Observable((subscriber)=>{
       this.socket.on(eventName, (data:any) =>{
         subscriber.next(data);
       })
     });
   }
emit(eventName:string, data:any){
  this.socket.emit(eventName,data);
}
}
