import { Component, OnInit, Input } from '@angular/core';

import { DisplayComponent} from './../display/display.component';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
// local variables
  firstName: String;
  lastName: String;
  title: String;
  displayMessage: String;
  // flag to determine whether to display the message
  showTitle = false;
  constructor() { }
// ngOnInit
  OnInit() {
    this.firstName = 'Srinivas';
    this.lastName = 'Raghavan';
  }
  // method to concatenate the first and last name and put it in title
getDetails(fName, lName) {
  this.title = fName + ' ' + lName;
  this.displayMessage = this.title;
  this.showTitle = true;
}
}
