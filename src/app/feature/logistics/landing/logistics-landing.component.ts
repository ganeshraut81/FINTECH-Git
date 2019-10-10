import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logistics-landing',
  templateUrl: './logistics-landing.component.html',
  styleUrls: ['./logistics-landing.component.scss']
})
export class LogisticsLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigateByUrl('logistics/request');
  }


}
