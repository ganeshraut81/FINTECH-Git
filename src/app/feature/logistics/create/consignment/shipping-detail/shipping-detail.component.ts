import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.scss']
})
export class ShippingDetailComponent implements OnInit {
  shippingForm1 = new FormGroup({
    addr1: new FormControl(''),
   
  });

  shippingForm2 = new FormGroup({
    addr2: new FormControl(''),
   
  });

  shippingForm3 = new FormGroup({
    addr3: new FormControl(''),
   
  });
  constructor() { }

  ngOnInit() {
  }

}
