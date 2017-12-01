import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
// Using Input() directive to get the title
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
