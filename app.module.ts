import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, AmazonLoginProvider} from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocialLoginModule
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
              '336628512956-mr7193q27ns3nf93h9ubji5aircdfm4c.apps.googleusercontent.com'
            ),
          },
          //{
            //id: FacebookLoginProvider.PROVIDER_ID,
           // provider: new FacebookLoginProvider('561602290896109'),
          //},
          //{
            //id: AmazonLoginProvider.PROVIDER_ID,
            //provider: new AmazonLoginProvider(
             // 'amzn1.application-oa2-client.f074ae67c0a146b6902cc0c4a3297935'
           // ),
          //},
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }