import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../../shared-module/shared-component.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedComponentModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
