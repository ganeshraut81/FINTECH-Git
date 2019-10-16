import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { SourceSavedAddressService } from '../../../../service/sourceSavedAddress.service';
import { Address } from 'src/app/feature/models/address.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recent-shipping-detail',
  templateUrl: './recent-shipping-detail.component.html',
  styleUrls: ['./recent-shipping-detail.component.scss']
})
export class RecentShippingDetailComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() recentShippingAddress: any;

  constructor() { }

  ngOnInit() {
  }
}
