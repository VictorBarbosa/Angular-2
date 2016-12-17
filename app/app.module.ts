import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {FormComponent} from '../app/form/form'
 
import {UniquePipe}from '../app/services/unique'
import {FilterPipe}from '../app/services/filter'

import {Person}from '../app/model/person'
@NgModule({
  imports:      [ BrowserModule ,FormsModule ],
  declarations: [ AppComponent , FormComponent ,UniquePipe,FilterPipe ],
  bootstrap:    [ FormComponent ]
})
export class AppModule { }
