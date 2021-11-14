import { Component } from '@angular/core';

@Component({
  selector: 'grocery-cart',
  template: `
  <div class="flex flex-col items-center justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 id="cart" class="leading-none text-2xl text-grey-darkest py-4 ">Shopping Cart</h1>
    <div class="flex items-align w-full items-start justify-evenly">
      <form #myForm="ngForm" class="flex flex-col py-10">
        <span class=" text-lg leading-none text-grey-darkest py-4 " >First Name:</span>
        <input class="mx-5 shadow border border-grey-500 rounded w-50 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline"
        type="text" pattern="[a-zA-Z ]*" minlength="2" required 
        [(ngModel)]="firstname" name="firstName" #firstName="ngModel" >
        <p *ngIf="firstName?.errors?.['pattern']">
        Only alphabetical characters are allowed.</p>
        <p *ngIf="firstName?.errors?.['minlength']">
        This entry must have at least two characters.</p>
        <span class="text-lg leading-none text-grey-darkest py-4 " >Last Name:</span>
        <input class="mx-5 shadow border border-grey-500 rounded w-50 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline"
        type="text" pattern="[a-zA-Z ]*" minlength="2" required 
        [(ngModel)]="lastname" name="lastName" #lastName="ngModel" >
        <p *ngIf="lastName?.errors?.['pattern']">
        Only alphabetical characters are allowed.</p>
        <p *ngIf="lastName?.errors?.['minlength']">
        This entry must have at least two characters.</p>
        <span class="text-lg leading-none text-grey-darkest py-4 " >Street Address:</span>
        <input class="mx-5 shadow border border-grey-500 rounded w-50 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline"
        type="text" minlength="2" required 
        [(ngModel)]="streetaddress" name="streetAddress" #streetAddress="ngModel" >
        <p class="text-red-500" *ngIf="streetAddress?.errors?.['minlength']">
        This entry must have at least two characters.</p>
        <p class="text-gray-500" *ngIf="streetAddress?.errors?.['required']">This field is required.</p>
        <button (click)="addAddress()" type="submit" 
        class="flex justify-center items-center my-5 mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Submit Address</button>
        <p class="text-red-700 text-md">{{errorMessage}}</p>
      
      </form>

      <div class="flex flex-col items-start justify-center p-10">
        <form #myForm2="ngForm" class="flex flex-col items-center justify-center py-10">
          <p class="text-red-500" *ngIf="fruitQuantity?.errors?.['pattern']">
            Only numbers are allowed.</p>
            <p class="text-red-500">{{quantityMessage}}</p>
          <div class="flex items-center justify-center">
            <div class="dropdown inline-block relative">
              <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span class="mr-1">Fruit</span>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
              </button>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li class=""><a (click)="selectedFruitApple()" class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Apples</a></li>
                <li class=""><a (click)="selectedFruitPeach()" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Peaches</a></li>
                <li class=""><a (click)="selectedFruitPear()" class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Pears</a></li>
                <li class=""><a (click)="selectedFruitPlum()" class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Plums</a></li>
              </ul>
            </div>
            <input id="fruit-box" class="cursor-not-allowed mx-5 shadow border border-grey-500 rounded text-gray-700 mb-3"
            type="text" pattern="[a-zA-Z ]*" required
            [(ngModel)]="selectedfruit" name="selectedFruit" #selectedFruit="ngModel"
            >
            <input class="mx-5 shadow border border-grey-500 rounded w-12 py-1 px-3 text-gray-700 mb-3 focus:shadow-outline"
            type="text" pattern="[0-9]*" minlength="1" required 
            [(ngModel)]="quantity" name="fruitQuantity" #fruitQuantity="ngModel" >
            <button [disabled]="!myForm2.form.valid" (click)="addFruitToBasket()" type="submit" class="flex justify-center items-center my-5 mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center">Add Fruit</button>
          </div>
        </form>
        <span class="leading-none text-xl text-grey-darkest py-2 ">{{orderMessage}}</span>
        <div class="flex flex-col w-full items-center justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 id="cart" class="leading-none text-xl text-grey-darkest py-2 ">Cart</h1>
          <table class="table-auto">
            <thead>
              <tr>
                <th class="px-4 py-2 text-emerald-600">Basket</th>
                <th class="px-4 py-2 text-emerald-600">Quantity</th>
                <th class="px-4 py-2 text-emerald-600">Unit Price</th>
                <th class="px-4 py-2 text-emerald-600">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of basket">
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{item.fruit}}</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{item.quantity}}</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{item.unitPrice}}</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{item.amount}}</td>
                <button (click)="deleteFromCart(item)" type="button" class="flex justify-center my-2 items-center bg-red-300 hover:bg-red-500 text-black-800 py-1 px-2 rounded inline-flex items-center">
                  delete
                </button>
              </tr>
              <tr *ngIf="basket[0]">
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Subtotal</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium"></td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium"></td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{subtotal}}</td>
              </tr>
              <tr *ngIf="basket[0]">
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Taxes 12%</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium"></td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium"></td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{taxes}}</td>
              </tr>
              <tr *ngIf="basket[0]">
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Total</td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium"></td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium"></td>
                <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{{total}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  `,
  styleUrls: ['./grocery-cart.component.scss'],
  providers: []
})
export class GroceryCartComponent  {
  firstname = ''; lastname = ''; 
  streetaddress = ''; selectedfruit = '';
  quantity = '1'; basket: Basket[] = [];  
  applePrice:number; pearPrice:number;
  peachPrice:number; plumPrice:number;
  taxes = 0; total = 0; subtotal = 0;
  orderto = ''; errorMessage = '';
  orderMessage = ''; quantityMessage = '';
  constructor() {
    this.applePrice = this.randomIntFromInterval(0.88, 1.87)
    this.peachPrice = this.randomIntFromInterval(0.88, 1.87)
    this.pearPrice = this.randomIntFromInterval(0.88, 1.87)
    this.plumPrice = this.randomIntFromInterval(0.88, 1.87)
   }
  onDataSubmit(){
    console.log('submitting')
  }
  selectedFruitApple() {
    this.selectedfruit = 'apple';
  }
  selectedFruitPear() {
    this.selectedfruit = 'pear';
  }
  selectedFruitPeach() {
    this.selectedfruit = 'peach';
  }
  selectedFruitPlum() {
    this.selectedfruit = 'plum';
  }
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
  deleteFromCart(item: Basket) {
    this.basket = this.basket.filter(basketItem => {
      return (item.fruit !== basketItem.fruit)
    })
    this.calculateTotal()
  }  
  
  calculateTotal() {
      this.subtotal = parseFloat((this.basket.reduce((acc, obj) => { return acc + (obj.amount); }, 0)).toFixed(2))
      this.taxes = parseFloat((this.subtotal*0.12).toFixed(2))
      this.total = parseFloat((this.subtotal*1.12).toFixed(2))
  }
  addAddress() {
    this.errorMessage = ''
    if(this.streetaddress === '') this.errorMessage = 'Please put your street address'
    else if(this.streetaddress.length < 3) this.errorMessage = 'Please put at least 3 characters'
    else this.orderMessage = `Order for ${this.firstname} ${this.lastname} at ${this.streetaddress}`
    setTimeout(() => {
      this.errorMessage = ''
    }, 4500)

  }
  //math
  randomIntFromInterval(min: number, max: number) { // min and max included 
    return parseFloat((Math.random() * (max - min + 1) + min).toFixed(2))
  }

}

interface Basket {
  fruit: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}
