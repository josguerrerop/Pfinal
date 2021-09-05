import { Component, OnInit } from '@angular/core';
import {MatDialogModule,MatDialogConfig} from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA ,MatDialog} from '@angular/material/dialog';


import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor(private dialog: MatDialog) { 

    const dialogRef = this.dialog.open(LoginComponent,{
       disableClose: true 
    });
}

ngOnInit(): void {
   
}
}
