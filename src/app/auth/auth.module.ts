import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { HelpersModule } from './../helpers/helpers.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HelpersModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [
    {
        provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
        useValue: {
            _forceAnimations: true,
        }
    }
],
})
export class AuthModule { }
