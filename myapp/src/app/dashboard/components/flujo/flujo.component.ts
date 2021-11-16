import { Component, OnInit } from '@angular/core';
import { MatlabService } from 'src/app/services/Matlab/matlab.service';
import { BackendService } from 'src/app/services/Backend/backend.service';

@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.component.html',
  styleUrls: ['./flujo.component.css']
})
export class FlujoComponent implements OnInit {

  constructor(private NodeService:BackendService) {}

  ngOnInit(): void {
    //this.NodeService.GuardarFlujo
  }

}
