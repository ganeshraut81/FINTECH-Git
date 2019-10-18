import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'finance-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  selectedOption: number = -1  ;
  @Output() clicked = new EventEmitter<any>()

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(stringEvent: string, options: number) {
    this.selectedOption = +options;
    this.clicked.emit(stringEvent);
  }

}
