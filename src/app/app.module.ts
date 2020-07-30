
import { AppRoutingModule } from './app-routing.module';
import { NgModule }   from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';  
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { AppComponent }     from './app.component';  

@NgModule({  
  declarations: [ AppComponent ],  
  imports: [ 
    BrowserModule, 
    jqxGridModule,
    AppRoutingModule
  ],  
  providers: [],
  bootstrap: [ AppComponent ]  
})  

export class AppModule {}  
