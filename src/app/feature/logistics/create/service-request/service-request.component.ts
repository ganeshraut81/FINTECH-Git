import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {
  searchForm = new FormGroup({
    checkbox1: new FormControl(''),
    checkbox2: new FormControl(''),
    checkbox3: new FormControl(''),
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNext() {
    this.router.navigateByUrl('logistics/details');
  }

}
