import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'opencart';

  backgroundColor = 'white';
  height = 200;
  width = 150;
  minHeight = 0;
  maxHeight = 400;
  minWidth = 0;
  maxWidth = 300;
  rotation = 0;

  handleClickRed() {
    this.backgroundColor = 'red';
  }

  handleClickGreen() {
    this.backgroundColor = 'green';
  }

  handleClickBlue() {
    this.backgroundColor = 'blue';
  }

  handleHeight(event: Event) {
    const target = event.target as HTMLInputElement;
    this.height = Number(target.value);
  }

  handleWidth(event: Event) {
    const target = event.target as HTMLInputElement;
    this.width = Number(target.value);
  }

  handleRotationPlus() {
    this.rotation += 6;
  }

  handleRotationMinus() {
    this.rotation -= 6;
  }
}
