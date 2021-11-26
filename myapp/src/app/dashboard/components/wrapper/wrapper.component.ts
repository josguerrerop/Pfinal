import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../login/login.component'
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
   expanded:boolean = false;
   private data:any;
   public  user:any=false;
  

  constructor(private dialog: MatDialog,
    private router:Router,
    private service:SocialAuthService
    ) { 
  
  }

  CerrarSesion(){
    localStorage.removeItem('user')
    window.location.reload();
  }

  ngOnInit(): void {
    this.data=(localStorage.getItem('user'));
    this.user=JSON.parse(this.data);

    if(!this.user){
        this.dialog.open(LoginComponent,{
        disableClose: true 
     });
     }else{
      this.router.navigate(['/Algoritmo']);
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
