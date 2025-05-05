import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'opencart';

  // isSucccess= true;

  // fullName = 'Sinju varghese';
  
 
  // backgroundColor = 'white';
  // height = 200;
  // width = 150;
  // minHeight = 0;
  // maxHeight = 400;
  // minWidth = 0;
  // maxWidth = 300;
  // rotation = 0;

  // handleClickRed() {
  //   this.backgroundColor = 'red';
  // }

  // handleClickGreen() {
  //   this.backgroundColor = 'green';
  // }

  // handleClickBlue() {
  //   this.backgroundColor = 'blue';
  // }

  // handleHeight(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   this.height = Number(target.value);
  // }

  // handleWidth(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   this.width = Number(target.value);
  // }

  // handleRotationPlus() {
  //   this.rotation += 6;
  // }

  // handleRotationMinus() {
  //   this.rotation -= 6;
  // }


  // form

  student = {
    firstName: '',
    lastName: '',
    class: '',
    age: null,
    mark1: null,
    mark2: null,
    mark3: null,
    favColor: '',
    gender: ''
  };

  classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sentence: string = '';

  generateSentence() {
    const { firstName, lastName, class: classNum, age, gender, favColor, mark1, mark2, mark3 } = this.student;
    const totalMarks = (mark1 || 0) + (mark2 || 0) + (mark3 || 0); // Handles null values
    const pronoun = gender === 'Female' ? 'She' : 'He';
    const possessivePronoun = gender === 'Female' ? 'Her' : 'His';
  
    this.sentence = `${firstName} ${lastName} of class ${classNum} is ${age} years old. ${pronoun} scored ${totalMarks} marks in the exam. ${possessivePronoun} favorite color is ${favColor}.`;
  }
  
}
