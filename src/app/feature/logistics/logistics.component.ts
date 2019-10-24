import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.scss']
})
export class LogisticsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(url: string) {
    const urlString = 'logistics/' + url;
    switch (url) {
      case 'create-order':
        this.router.navigateByUrl(urlString);
        break;
      case 'manage':
        this.router.navigateByUrl(urlString);
        break;
      default:
        this.router.navigateByUrl(urlString);
    }
  }

}
