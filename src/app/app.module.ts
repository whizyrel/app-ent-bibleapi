import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule /* , MatOptionModule */,
  MatIconModule,
  MatButtonModule,
  MatGridListModule /* , MatSuffixModule */
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

import { ApiUrlsService } from './services/api-urls.service';
import { SigninService } from './services/signin.service';
import { AuthTokenService } from './services/auth-token.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { SigninComponent } from './signin/signin.component';
import { AccountConfirmComponent } from './account-confirm/account-confirm.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeContentComponent,
    SignupComponent,
    SigninComponent,
    VerifyUserComponent,
    AccountConfirmComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: /* process.env.appID */ 'app-api-service'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [ApiUrlsService, SigninService, AuthTokenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
