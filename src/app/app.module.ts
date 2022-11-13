import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { IdentificationFormComponent } from './identification-form/identification-form.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsFormComponent,
    IdentificationFormComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule, 
    NgbModule,
    RouterModule,
    AppRoutingModule   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
