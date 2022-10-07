import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { sharedMudole } from './shared/shared.module';
import { componentsModule } from './core/components/components.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    sharedMudole,
    componentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
