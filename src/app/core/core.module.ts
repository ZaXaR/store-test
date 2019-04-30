import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from '../shared-module/shared-component.module';
import { ApiStubService } from './services/api/api-stub.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentModule
  ],
  providers: [ApiStubService]
})
export class CoreModule { }
