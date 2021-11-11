import { Component } from '@angular/core';

@Component({
  selector: 'grocery-cart',
  template: `
  <div class="flex flex-col items-center justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 id="cart" class="leading-none text-2xl text-grey-darkest py-4 ">Shopping Cart</h1>
    <div class="flex items-align">
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
        <span class="text-lg leading-none text-grey-darkest py-4 " >Street Address:</span>
        <input class="mx-5 shadow border border-grey-500 rounded w-50 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline"
        type="text" pattern="[a-zA-Z ]*" minlength="2" required 
        [(ngModel)]="streetaddress" name="streetAddress" #streetAddress="ngModel" >
        <p class="text-red-500" *ngIf="streetAddress?.errors?.['pattern']">
        Only alphabetical characters are allowed.</p>
        <p class="text-red-500" *ngIf="streetAddress?.errors?.['minlength']">
        This entry must have at least two characters.</p>
        <p class="text-gray-500" *ngIf="streetAddress?.errors?.['required']">This field is required.</p>
        <button [disabled]="!myForm.form.valid" (click)="onDataSubmit()" type="submit" class="flex justify-center items-center my-5 mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">Submit Address</button>
      </form>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <table class="table-auto">
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="bg-emerald-200">
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
  `,
  styleUrls: ['./grocery-cart.component.scss'],
  providers: []
})
export class GroceryCartComponent  {
  firstname = ''; lastname = ''; 
  streetaddress = '';
  constructor() { }
  onDataSubmit(){
    console.log('submitting')
  }
  

}
