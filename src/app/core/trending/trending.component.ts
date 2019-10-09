import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { SlidesService } from '../service/slides.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  products: any;
  slides: any;

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: false,
    variableWidth: true
  };

  productsSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: false
  }

  slickInit(e) { }

  constructor(private productsService: ProductsService, private slidesService: SlidesService) { }

  ngOnInit() {
    this.productsService.trendingProducts().subscribe(
      data => {
        this.products = data['products'];
        //console.log(`Product array :${JSON.stringify(this.products)}`);
      }
    )
    this.slidesService.slides().subscribe(
      data => {
        this.slides = data['slides'];
        //console.log(`Slide array :${JSON.stringify(this.slides)}`);
      }
    )
  }
}
