import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';
import { StoreModule } from '@ngrx/store';
import { countReducer } from './reducer/test.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ total: countReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
