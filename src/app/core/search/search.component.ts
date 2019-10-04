import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  slides = [
    {img: "../../../assets/images/wire.svg", title:'Conductors'},
    {img: "../../../assets/images/plug-in.svg", title:'Electrical Equipment'},
    {img: "../../../assets/images/screw.svg", title:'Insulators & Hardware Fittings'},
    {img: "../../../assets/images/light-bulb.svg", title:'Luminaries, other general electrical equipment'},
    {img: "../../../assets/images/plug-in.svg", title:'Cables & Accessories'}    
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  addSlide() {
    //this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }

  constructor() { }

  ngOnInit() {

  
  }

}
