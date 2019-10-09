import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { SlidesService } from '../service/slides.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {

  products: any;
  slides: any;

  slideCategoryConfiig = { slidesToShow: 4, slidesToScroll: 1, autoplay: false, autoplaySpeed: 2000, infinite: false }
  slideLastProduct = { slidesToShow: 4, slidesToScroll: 1, autoplay: false, autoplaySpeed: 2000, infinite: false, variableWidth: true }

  slickInit(e) { }

  constructor(private productsService: ProductsService, private slidesService: SlidesService, private router: Router) { }

  ngOnInit() {
    this.productsService.newArrivalProducts().subscribe(
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

  newArrivalSearch() {
    this.router.navigateByUrl("productList");
    console.log("product list");
  }
}
