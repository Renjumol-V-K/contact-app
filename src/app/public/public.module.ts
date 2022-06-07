import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SignComponent } from './register/sign.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [SignComponent, RegisterComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
