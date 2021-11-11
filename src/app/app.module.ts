import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GroceryCartComponent } from './grocery-cart/grocery-cart.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CalculatorComponent,
    GroceryCartComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
