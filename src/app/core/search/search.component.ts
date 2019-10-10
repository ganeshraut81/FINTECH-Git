import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../service/slides.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  slides: any;
  values = '';

  slideConfig = { "slidesToShow": 5, "slidesToScroll": 4 };

  addSlide() {
    //this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) { }

  constructor(private slidesService: SlidesService) { }

  ngOnInit() {
    this.slidesService.slides().subscribe(
      data => {
        this.slides = data['slides'];
        //console.log(`Slide array :${JSON.stringify(this.slides)}`);
      }
    )
  }

  search(search: string) {
    console.log(search);
    alert("Data is being fetched from the API!!!")
  }

}
