import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LateralsComponent } from './laterals/laterals.component';
import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    LateralsComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
