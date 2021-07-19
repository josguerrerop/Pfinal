import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import {GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleService } from 'src/app/services/google.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loggedIn: boolean =false;
    socialUser: SocialUser = new SocialUser;

  constructor( private authService: SocialAuthService, private dataService:GoogleService ) {
    
  }

   refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  loginWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.dataService.postSocialLogin({email:user.email}).subscribe(
        res => {
          if(res.status==200){
            console.log(user)
              //this.socialUser = user;
              //this.loggedIn = (user != null);
          }
        }
      )
    });  
  }
  logOut(): void {
    this.authService.signOut();
  }
  ngOnInit(): void { 
  }
}
