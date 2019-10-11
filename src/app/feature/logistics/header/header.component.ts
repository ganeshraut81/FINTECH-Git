import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../../../core/service/slides.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  slides: any;
  
  headerSearchForm = new FormGroup({
    headerSearchText: new FormControl(''),
    
  });
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
    alert("Data is being fetched from the API!!!")
  }

}
