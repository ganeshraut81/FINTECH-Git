import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider'

@Component({
  selector: 'app-finance-landing',
  templateUrl: './finance-landing.component.html',
  styleUrls: ['./finance-landing.component.scss']
})
export class FinanceLandingComponent implements OnInit {

  constructor(private router: Router) { }
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  ngOnInit() {
  }

  onClick() {
    this.router.navigateByUrl('finance/login');
  }
}
