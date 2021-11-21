import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
   expanded:boolean = false;
   private isLoggedIn:any;
   private parse:any
   
  constructor(private dialog: MatDialog,
    private router:Router,
    ) { 
  
  }

  ngOnInit(): void {
    this.parse=(localStorage.getItem('Loged'));
    this.isLoggedIn=JSON.parse(this.parse);
    if(this.isLoggedIn){
      const dialogRef = this.dialog.open(LoginComponent,{
        disableClose: true 
     });
     }else{
      this.router.navigate(['/das/Algoritmo']);
     }
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
