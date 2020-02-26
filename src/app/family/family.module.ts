import { DashboardModule } from './../dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFamilyComponent } from './register-family/register-family.component';



@NgModule({
  declarations: [RegisterFamilyComponent],
  imports: [
    CommonModule,
    DashboardModule,
    RouterModule
  ]
})
export class FamilyModule { }
