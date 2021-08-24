
//import { SocketIoComponent } from './components/socket-io/socket-io.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider,} from 'angularx-social-login';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialCssVarsModule,MaterialCssVarsService} from 'angular-material-css-vars';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //EmployeeComponent,
    //SocketIoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MaterialCssVarsModule.forRoot({
      isAutoContrast:true,
      darkThemeClass:'isDarkTheme',
      lightThemeClass:'isLightTheme'
    })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
               '5502971411-fm2m6ki0vhhnp4a8jl07jk4365h0ls2u.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
    MaterialCssVarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
