import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show = true;
  rotateVal = false;

  collapse () {
    this.show = !this.show;
    this.rotateVal = false;
  }

  rotate () {
    this.show = false;
    this.rotateVal = !this.rotateVal;
  }
}
