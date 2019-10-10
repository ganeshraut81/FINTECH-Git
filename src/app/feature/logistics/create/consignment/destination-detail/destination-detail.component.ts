import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {
  addressForm = new FormGroup({
    addr1: new FormControl(''),
  });
  addressForm2 = new FormGroup({
    addr2: new FormControl(''),
  });
  addressForm3 = new FormGroup({
    addr3: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

}
