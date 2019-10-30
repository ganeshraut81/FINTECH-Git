import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeftMenuCssService } from './service/left-menu-css.service';


@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  //displayStepper: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  navigateTo(url: string) {
    const urlString = 'finance/' + url;
    console.log(`I am inside the main component: ${urlString}`);
    switch (url) {
      case 'financeOption':
        this.router.navigateByUrl(urlString);
        break;
      case 'documents':
        this.router.navigateByUrl(urlString);
        break;
      case 'status':
        this.router.navigateByUrl(urlString);
        break;
      default:
        this.router.navigateByUrl(urlString);
    }
  }

}
