import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-packing-detail',
  templateUrl: './packing-detail.component.html',
  styleUrls: ['./packing-detail.component.scss']
})
export class PackingDetailComponent implements OnInit {
  packageForm = new FormGroup({
    title: new FormControl(''),
  });

  packageForm2 = new FormGroup({
    title2: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

}
