import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsModule } from './modules/persons/persons.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; 



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    PersonsModule,
    HttpClientModule
    
  ],
  schemas: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
