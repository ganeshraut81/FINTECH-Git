import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  slides = [
    { title: "Cables & Accessories" },
    { title: "Conductors" },
    { title: "Electrical Equipment" },
    { title: "Insulators & Hardware Fittings" },
    { title: "Insulators & Hardware Fittings" },
    { title: "Insulators & Hardware Fittings" }
  ];

  productSlides = [
    { img: "assets/images/product-image.png" },
    { img: "assets/images/product-image.png" },
    { img: "assets/images/product-image.png" }
  ];

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

  slickInit(e) {
    console.log('slick initialized');
  }
  constructor() { }

  ngOnInit() {
  }

}
