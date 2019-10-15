import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlidesService } from '../service/slides.service';
import * as $ from 'jquery';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  slides: any;
  private loadComponent = false;
  constructor(private router: Router, private slidesService: SlidesService) { }

  ngOnInit() {
    this.slidesService.slides().subscribe(
      data => {
        this.slides = data['slides'];
        //console.log(`Slide array :${JSON.stringify(this.slides)}`);
      }
    )
  }

  onLogin() {
    // console.log(`U will B directed to Buyer Login page`); 
    this.router.navigateByUrl('/buyer');
  }

  onFinance() {
    // console.log(`U will B directed to Finance Login page`);   
    this.router.navigateByUrl('/finance');
  }

  onLogistics() {
    // console.log(`U will B directed to Logistics Login page`);    
    this.router.navigateByUrl('/logistics')
  }

  loadMyChildComponent() {
    console.log('modal opening');
    this.loadComponent = true;
    $("#myModal").modal('show');
  }
}
