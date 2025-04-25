import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'opencart';
  message="hello world";
  numbers = [1, 3 , 5 ,6];
  rows = 5;
  dateTime = '';
  color = 'red';
  classNamesString = 'text-red text-center';
  classNamesList = ['text-red', 'text-center'];

  count = 0;
    handleClick(){
      this.count++;
    }
    
  constructor(){
    setInterval(() => {
      this.color === 'red' ? this.color = 'blue' : this.color = 'red';
      const date = new Date();
      this.dateTime = date.toLocaleString()
    },1000)

     
  }


}
