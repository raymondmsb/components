import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RaCalculatorComponent } from './ra-calculator/ra-calculator.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { AlmAdditionalComponent } from './alm-additional/alm-additional.component';
import { BsanMathComponent } from './bsan-math/bsan-math.component';
import { AlperenAdditionComponent } from './alperen-addition/alperen-addition.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    RaCalculatorComponent,
    TjsMultiplicationComponent,
    AlmAdditionalComponent,
    BsanMathComponent,
    AlperenAdditionComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatFormFieldModule
    , MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
