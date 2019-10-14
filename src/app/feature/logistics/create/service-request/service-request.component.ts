import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {
  @Input() parentGroup: FormGroup;
  searchForm = new FormGroup({
    transportationChk: new FormControl(''),
    packingChk: new FormControl(''),
    warehouseChk: new FormControl(''),
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // console.warn(this.createMainForm.value);

  // onNext() {
  //   this.router.navigateByUrl('logistics/details');
  // }
 

}
