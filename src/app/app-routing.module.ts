import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';
import { AccountConfirmComponent } from './account-confirm/account-confirm.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'account/verify/', component: VerifyUserComponent, pathMatch: 'full' },
  {
    path: 'account/forgot',
    component: ForgotPasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'account/confirm',
    component: AccountConfirmComponent,
    pathMatch: 'full'
  },
  { path: 'user/dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent, redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
