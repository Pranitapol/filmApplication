import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule  } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { FilmComponentComponent } from './film-component/film-component.component';
import { DirectorComponent } from './director/director.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { GetComponent } from './get/get.component';
@NgModule({
  declarations: [
    AppComponent,
    FilmComponentComponent,
    DirectorComponent,
    DeleteComponent,
    UpdateComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
