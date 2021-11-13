import { Component, OnInit } from '@angular/core';
import { Calculation, calcLogic } from '../calc_logic/calcLogic';
@Component({
  selector: 'app-calculator',
  template: ` <div class="flex flex-col items-center justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 id="calculator" class="p-1 leading-none text-2xl text-grey-darkest">Calculator</h1>  
                <h1 class="text-red-300">{{errorMessage}}</h1>
              </div>
              <form #calcForm="ngForm" class="flex flex-col items-center justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div>
                <input class="mx-5 shadow border border-grey-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline" pattern="[0-9.]*" minlength="1" [(ngModel)]="addinput1" name="addInput1" #addInput1="ngModel"> + <input class="mx-5 shadow border border-grey-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline" pattern="[0-9.]*" minlength="1" [(ngModel)]="addinput2" name="addInput2" #addInput2="ngModel"> 
                <input class="mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" type='button' value="=" (click)=addClick()> 
                {{addoutput}}</div> <br /> 
                <div *ngIf="addInput1?.errors?.['pattern']" class="errorbox">{{inputErrorPattern}}</div>
                <div *ngIf="addInput2?.errors?.['pattern']" class="errorbox">{{inputErrorPattern}}</div>
                <div *ngIf="addInput1?.errors?.['minlength']" class="errorbox">{{inputErrorMinlength}}</div>
                <div *ngIf="addInput2?.errors?.['minlength']" class="errorbox">{{inputErrorMinlength}}</div>
                <br />
                <div>
                <input class="mx-5 shadow border border-grey-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline" pattern="[0-9.]*" minlength="1" [(ngModel)]="subtractinput1" name="subtractInput1" #subtractInput1="ngModel"> - <input class="mx-5 shadow border border-grey-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline" pattern="[0-9.]*" minlength="1" [(ngModel)]="subtractinput2" name="subtractInput2" #subtractInput2="ngModel"> 
                <input class="mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" type='button' value="=" (click)=subtractClick()> 
                {{subtractoutput}}</div> <br /> 
                <div *ngIf="subtractInput1?.errors?.['pattern']" class="errorbox">{{inputErrorPattern}}</div>
                <div *ngIf="subtractInput2?.errors?.['pattern']" class="errorbox">{{inputErrorPattern}}</div>
                <div *ngIf="subtractInput1?.errors?.['minlength']" class="errorbox">{{inputErrorMinlength}}</div>
                <div *ngIf="subtractInput2?.errors?.['minlength']" class="errorbox">{{inputErrorMinlength}}</div>
                <br />
                <div>
                <input class="mx-5 shadow border border-grey-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline" pattern="[0-9.]*" minlength="1" [(ngModel)]="divideinput1" name="divideInput1" #divideInput1="ngModel"> / <input class="mx-5 shadow border border-grey-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline" pattern="[0-9.]*" minlength="1" [(ngModel)]="divideinput2" name="divideInput2" #divideInput2="ngModel"> 
                <input  class="mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" type='button' value="=" (click)=divideClick()> 
                {{divideoutput}}</div> 
                <div *ngIf="divideInput1?.errors?.['pattern']" class="errorbox">{{inputErrorPattern}}</div>
                <div *ngIf="divideInput2?.errors?.['pattern']" class="errorbox">{{inputErrorPattern}}</div>
                <div *ngIf="divideInput1?.errors?.['minlength']" class="errorbox">{{inputErrorMinlength}}</div>
                <div *ngIf="divideInput2?.errors?.['minlength']" class="errorbox">{{inputErrorMinlength}}</div>
                <br /> <br />
                <div>
                <input class="mx-5 shadow border border-grey-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline" pattern="[0-9.]*" minlength="1" [(ngModel)]="multiplyinput1" name="multiplyInput1" #multiplyInput1="ngModel"> x <input class="mx-5 shadow border border-grey-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 focus:shadow-outline" pattern="[0-9.]*" minlength="1" [(ngModel)]="multiplyinput2" name="multiplyInput2" #multiplyInput2="ngModel"> 
                <input class="mx-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" type='button' value="=" (click)=multiplyClick()> 
                {{multiplyoutput}}</div> <br />
                <div *ngIf="multiplyInput1?.errors?.['pattern']" class="errorbox">{{inputErrorPattern}}</div>
                <div *ngIf="multiplyInput2?.errors?.['pattern']" class="errorbox">{{inputErrorPattern}}</div>
                <div *ngIf="multiplyInput1?.errors?.['minlength']" class="errorbox">{{inputErrorMinlength}}</div>
                <div *ngIf="multiplyInput2?.errors?.['minlength']" class="errorbox">{{inputErrorMinlength}}</div>
              </form>`,
  styleUrls: ['./calculator.component.scss'],
  providers: [calcLogic]
})
export class CalculatorComponent implements OnInit {
  errorMessage = ''; addinput1 = ''; addinput2 = ''; addoutput = '';
  subtractinput1 = ''; subtractinput2 = ''; subtractoutput = '';
  divideinput1 = ''; divideinput2 = ''; divideoutput = '';
  multiplyinput1 = ''; multiplyinput2 = ''; multiplyoutput = '';
  inputErrorPattern = 'please use only numbers'; inputErrorMinlength = 'please enter at least 1 number';
  Add = () => this.addoutput = `${parseInt(this.addinput1)!==parseFloat(this.addinput1) ? parseFloat(this.addinput1).toFixed(2) : parseInt(this.addinput1)} + ${parseInt(this.addinput2)!==parseFloat(this.addinput2) ? parseFloat(this.addinput2).toFixed(2) : parseInt(this.addinput2)} = ${this.add(this.addinput1, this.addinput2)}`
  Subtract = () => this.subtractoutput = `${parseInt(this.subtractinput1)!==parseFloat(this.subtractinput1) ? parseFloat(this.subtractinput1).toFixed(2) : parseInt(this.subtractinput1)} - ${parseInt(this.subtractinput2)!==parseFloat(this.subtractinput2) ? parseFloat(this.subtractinput2).toFixed(2) : parseInt(this.subtractinput2)} = ${this.subtract(this.subtractinput1, this.subtractinput2)}`
  Divide = () => this.divideoutput = `${parseInt(this.divideinput1)!==parseFloat(this.divideinput1) ? parseFloat(this.divideinput1).toFixed(2) : parseInt(this.divideinput1)} / ${parseInt(this.divideinput2)!==parseFloat(this.divideinput2) ? parseFloat(this.divideinput2).toFixed(2) : parseInt(this.divideinput2)} = ${this.divide(this.divideinput1, this.divideinput2)}`
  Multiply = () => this.multiplyoutput = `${parseInt(this.multiplyinput1)!==parseFloat(this.multiplyinput1) ? parseFloat(this.multiplyinput1).toFixed(2) : parseInt(this.multiplyinput1)} x ${parseInt(this.multiplyinput2)!==parseFloat(this.multiplyinput2) ? parseFloat(this.multiplyinput2).toFixed(2) : parseInt(this.multiplyinput2)} = ${this.multiply(this.multiplyinput1, this.multiplyinput2)}`
  add: Calculation; subtract: Calculation;
  divide: Calculation; multiply: Calculation;
  constructor(calcLogic: calcLogic) {
    this.add = calcLogic.add;
    this.subtract = calcLogic.subtract;
    this.divide = calcLogic.divide;
    this.multiply = calcLogic.multiply;
  }
  ngOnInit(): void {
    
  }
  addClick = () => {
    this.reset('add')
    let valid = this.checkValid(this.addinput1, this.addinput2)
    if(valid) this.Add();
    else this.errorMsg()
  }
  subtractClick = () => {
    this.reset('subtract')
    let valid = this.checkValid(this.subtractinput1, this.subtractinput2)
    if(valid) this.Subtract();
    else this.errorMsg()
  }
  divideClick = () => {
    this.reset('divide')
    let valid = this.checkValid(this.divideinput1, this.divideinput2)
    if(valid) this.Divide();
    else this.errorMsg()
  }
  multiplyClick = () => {
    this.reset('multiply')
    let valid = this.checkValid(this.multiplyinput1, this.multiplyinput2)
    if(valid) this.Multiply();
    else this.errorMsg()
  }
  checkValid = (input1: string, input2: string): boolean => {
    this.errorMessage = ''
    console.log(input1, ' ', input2)
    if(isNaN(parseFloat(input1))) return false; 
    if(isNaN(parseFloat(input2))) return false; 
    else return true;
  }
  errorMsg = () => {
    this.errorMessage = 'ensure that you have entered a number for every field'
    setTimeout(() => {
      this.errorMessage = ''
    }, 5000)
  }
  reset(type: string) {
    const add = () => { this.resetDivide(); this.resetMultiply(); this.resetSubtract(); }
    const subtract = () => { this.resetDivide(); this.resetMultiply(); this.resetAdd(); }
    const divide = () => { this.resetAdd(); this.resetMultiply(); this.resetSubtract(); }
    const multiply = () => { this.resetDivide(); this.resetAdd(); this.resetSubtract(); }
    switch(type) {
      case 'add': add(); break;
      case 'subtract': subtract(); break;
      case 'divide': divide(); break;
      case 'multiply': multiply(); break;
      default: break;
    }
  }
  resetDivide() {this.divideinput1 = ''; this.divideinput2 = ''; this.divideoutput = '';}
  resetAdd() {this.addinput1 = ''; this.addinput2 = ''; this.addoutput = '';}
  resetSubtract() {this.subtractinput1 = ''; this.subtractinput2 = ''; this.subtractoutput = '';}
  resetMultiply() {this.multiplyinput1 = ''; this.multiplyinput2 = ''; this.multiplyoutput = '';}
}
