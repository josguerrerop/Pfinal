import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
   expanded:boolean = false;
   mode:String=''
  constructor() { }

  ngOnInit(): void {
  }

  expander(){
    if(!this.expanded){
      this.expanded=true;
    }else{
      this.expanded=false;
      
    }
    console.log(this.expanded)
  }

}
