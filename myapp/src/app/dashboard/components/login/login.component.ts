import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocialAuthService } from "angularx-social-login";
import {GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean =false;
  socialUser: SocialUser = new SocialUser;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<LoginComponent>,
    private authService: SocialAuthService, 
     ){
      dialogRef.disableClose = true; 
  }

  public isLoggedIn():boolean{
    return this.loggedIn;
  }

  loginWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      if(user){
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));
        window.location.reload();
      }
      this.closeDialog();
    });  
  }

  logOut(): void {
    this.authService.signOut();
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  ngOnInit(): void {
 
  }

}
