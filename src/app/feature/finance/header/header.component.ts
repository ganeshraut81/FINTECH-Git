import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../../../core/service/slides.service';

@Component({
  selector: 'finance-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slides: any;
  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    this.slidesService.slides().subscribe(
      data => {
        this.slides = data['slides'];
      }
    )
  }

  search(search: string) {
    console.log(search);
    alert("Data to be fetched from the API - !!!")
  }

}
