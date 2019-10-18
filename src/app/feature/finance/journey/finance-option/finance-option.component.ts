import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'finance-option',
  templateUrl: './finance-option.component.html',
  styleUrls: ['./finance-option.component.scss']
})
export class FinanceOptionComponent implements OnInit {
  value: number = 100;
  newValue: number = 200;
  
  options: Options = {
    floor: 0,
    ceil: 200
  };
  options1: Options = {
    floor: 0,
    ceil: 300
  }

  constructor() { }

  ngOnInit() {
  }

}
