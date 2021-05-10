import { Component, OnInit } from '@angular/core';
import {SocketioService} from '../../services/socketio.service';

@Component({
  selector: 'app-socket-io',
  templateUrl: './socket-io.component.html',
  styleUrls: ['./socket-io.component.css']
})
export class SocketIoComponent implements OnInit {

  constructor(public socket : SocketioService) { }

  ngOnInit(): void {
    this.socket.listen('test event').subscribe((data)=>{
      console.log(data);
    })
  }

}
