import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://demo-auth.kezekte.kz',
        redirectUrl: 'https://demo-cabinet2.kezekte.kz/ru/c-overview/dashboard',
        postLogoutRedirectUri: 'https://kezekte.kz',
        clientId: 'QarjigerApiClient',
        scope: 'openid profile offline_access QarjigerApi',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
