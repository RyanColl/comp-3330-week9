# COMP 3330 - Week 10 - Lab

Ryan Collicutt - A00888552

# Week 10

In week 10 we started building with Angular. Because we are experienced with web-apps, we jumped right into a lot of content, including Forms! Today I am going to cover the details of the assignment and what it is I have done here. One tip I saw from a video gave me the command ```ng g c componentName```. This gives me a brand new folder in the app directory that ocmes with its own css, html, model and component files. 

# ES6 Usage Examples

1. Class AppComponent from lines 8-10 of app.component.ts
```js
export class AppComponent {
  title = 'hw5';
}
```

2. Arrow Function from a reducer function in line 197 of grocery-cart.component.ts
```js
this.subtotal = parseFloat((this.basket.reduce((acc, obj) => { return acc + (obj.amount); }, 0)).toFixed(2))
```

3. Let from a variable declaration in line 72 of calculator.component.ts
```js
let valid = this.checkValid(this.addinput1, this.addinput2)
```

4. Const from a function declaration into a variable in line 108 of calculator.component.ts
```js
const add = () => { this.resetDivide(); this.resetMultiply(); this.resetSubtract(); }
```

5. Template Literal String from the assignment of a template string to a variable in line 58 of calculator.component.ts
```js
Multiply = () => this.multiplyoutput = `${parseInt(this.multiplyinput1)!==parseFloat(this.multiplyinput1) ? parseFloat(this.multiplyinput1).toFixed(2) : parseInt(this.multiplyinput1)} x ${parseInt(this.multiplyinput2)!==parseFloat(this.multiplyinput2) ? parseFloat(this.multiplyinput2).toFixed(2) : parseInt(this.multiplyinput2)} = ${this.multiply(this.multiplyinput1, this.multiplyinput2)}`
```

6. Spread Syntax from line 184 of grocery-cart.component.ts
```js
this.basket = [...holder, ...existingItem]
```

7. Modules from the importing of modules in lines 1-9 of app.module.ts
```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GroceryCartComponent } from './grocery-cart/grocery-cart.component';
import { DropdownComponent } from './dropdown/dropdown.component';
```

# Angular

My experience with Angular was moderate. I enjoy using React more, but maybe it will grow on me. Form validation is self explanatary, but took a long time to set up, as this was my first serious Angular project. The calculators at the top implement a lot of logic in determining whether the inputs are integers or floating points. The lengthy template string used on line 58 of calculator.component.ts:
```js
Multiply = () => this.multiplyoutput = `${parseInt(this.multiplyinput1)!==parseFloat(this.multiplyinput1) ? parseFloat(this.multiplyinput1).toFixed(2) : parseInt(this.multiplyinput1)} x ${parseInt(this.multiplyinput2)!==parseFloat(this.multiplyinput2) ? parseFloat(this.multiplyinput2).toFixed(2) : parseInt(this.multiplyinput2)} = ${this.multiply(this.multiplyinput1, this.multiplyinput2)}`
```
determines if the ouput it is receiving is an integer or a floating point. It does that by comparing itself with ```parseInt``` and ```parseFloat```: 
```js
parseInt(this.multiplyinput1)!==parseFloat(this.multiplyinput1)```