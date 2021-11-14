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

8. Destructuring from line 1 of grocery-cart.component.js
```js
import { Component } from '@angular/core';
```

# Angular

My experience with Angular was moderate. I enjoy using React more, but maybe it will grow on me. Form validation is self explanatary, but took a long time to set up, as this was my first serious Angular project. The calculators at the top implement a lot of logic in determining whether the inputs are integers or floating points. The lengthy template string used on line 58 of calculator.component.ts:
```js
Multiply = () => this.multiplyoutput = `${parseInt(this.multiplyinput1)!==parseFloat(this.multiplyinput1) ? parseFloat(this.multiplyinput1).toFixed(2) : parseInt(this.multiplyinput1)} x ${parseInt(this.multiplyinput2)!==parseFloat(this.multiplyinput2) ? parseFloat(this.multiplyinput2).toFixed(2) : parseInt(this.multiplyinput2)} = ${this.multiply(this.multiplyinput1, this.multiplyinput2)}`
```
determines if the ouput it is receiving is an integer or a floating point. It does that by comparing itself with ```parseInt``` and ```parseFloat```: 
```js
parseInt(this.multiplyinput1)!==parseFloat(this.multiplyinput1)
```

The grocery cart component is massive. At a whopping 224 lines, it is a culmination of logic, variable holding, and static/pure functions. My favourite function from grocery cart is the addFruitToBasket function:
```js
addFruitToBasket() {
    this.quantityMessage = ''
    if(!this.quantity || this.quantity === '0') {
        this.quantityMessage = 'please enter a quantity greater than 0'; 
        setTimeout(() => {
          this.quantityMessage = ''
        }, 4500)
        return
      };
    let existingItem = this.basket.filter(item => {
      return item.fruit === this.selectedfruit
    })
    let unitPrice = this.selectedfruit === 'apple' ? this.applePrice 
                   :this.selectedfruit === 'pear' ? this.pearPrice
                   :this.selectedfruit === 'plum' ? this.plumPrice
                   :this.selectedfruit === 'peach' ? this.peachPrice 
                   :0
    let quantity = parseInt(this.quantity)
    let amount = parseFloat((unitPrice*quantity).toFixed(2))
    if(!existingItem[0]) {  
      this.basket.push({
        fruit: this.selectedfruit,
        quantity,
        unitPrice,
        amount
      })
    }
    else {
      let holder = this.basket.filter(item => {
        return item.fruit !== this.selectedfruit
      })
      existingItem[0].quantity = existingItem[0].quantity + quantity
      existingItem[0].amount = parseFloat((existingItem[0].quantity*unitPrice).toFixed(2));
      this.basket = [...holder, ...existingItem]
    }
    this.calculateTotal()
  }
```
This function is a masterpiece. It starts off with some error handling logic, which if fails, inserts a string into the error message variable and creates a timer for 4.5 seconds, after which it resets the error message variable to an empty string. If it passes, it filters the basket array and removes the currently selected fruit from the basket. If the basket does not have that current fruit, an entry is made into the basket of a basket object. This object is described on lines 211-216 of grocery-cart.component.ts:
```js
interface Basket {
  fruit: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}
```
If there is already an object that contains that fruit inside of the basket array, then instead of creating a new object for the array, it modifies the original one, and inserts it back into the array. This means that if I add an apple to the basket when there is already an apple in the basket, it will modify the current apple object, recalculating its quantity and its amount. ```this.calculateTotal()``` calculates the table total of all of the current objects in the basket. 
```js
this.subtotal = parseFloat((this.basket.reduce((acc, obj) => { return acc + (obj.amount); }, 0)).toFixed(2))
```
This reduces all of the object's in the basket's amounts into a single number for the subtotal. Taxes and total are easily calculatable from there. 

# TailwindCSS

Tailwind CSS allows us to specify a lot of our wanted css into the class names of the elements. For example, using ```class="flex flex-col"``` gives us a container with flex and flex-direction column. I have a repository set up that is a template for Angular and Tailwind, which I set up before I did this project. I will always use this template, as it comes with a couple benefits including being able to write your own SCSS.
Here is the link to the template: ```https://github.com/RyanColl/Angularv13.0-Tailwindv2.2```

# Design Architecture

In Angular, the view and the controller are seperated into an html and a typescript component. I used seperate components and placed them all together like a React app. My folder structure had the components nested inside the app folder. Each component has its own folder, filled with a module file, an html file, a component file, and an scss file. Looking at app.component.html, we see that all of our nested components are called together like so: 
```html
<app-form></app-form>
<app-calculator></app-calculator>
<grocery-cart></grocery-cart>
```
Each component gets rendered in order, so the calculator is underneath the app-form (the nav bar), and the grocery cart is underneath that. If I had a database, I would send my data through a server first, so my design architecture would be more complex. The app does not use state, but uses an event driven architecture with variables that change depending on clicks. A React app would be more capable of using state than this Angular app.

