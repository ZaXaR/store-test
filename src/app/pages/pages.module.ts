import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
