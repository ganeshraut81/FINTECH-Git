import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider'
import { LeftMenuCssService } from '../service/left-menu-css.service';

@Component({
  selector: 'app-finance-landing',
  templateUrl: './finance-landing.component.html',
  styleUrls: ['./finance-landing.component.scss']
})
export class FinanceLandingComponent implements OnInit {

  constructor(private router: Router, private leftMenuCss: LeftMenuCssService) { }
  leftMenuCssOption: number = 0;

  ngOnInit() {
    this.leftMenuCss.changeData(this.leftMenuCssOption);
  }
  
  onClick() {
    this.router.navigateByUrl('finance/financeOption');
  }
}
