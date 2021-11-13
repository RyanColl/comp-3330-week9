import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  value = ""
  search = '';
  constructor() { }

  submit(event: any) {  
    event.preventDefault()
    alert(`this element is just for show, however here is your search query: ${this.search}`)
  }

}
