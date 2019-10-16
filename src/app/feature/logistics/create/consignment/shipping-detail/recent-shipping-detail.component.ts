import { HttpClient } from '@angular/common/http';
import { SourceSavedAddressService } from '../../../../service/sourceSavedAddress.service';
import { Address } from './../../../../../models/Address.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ControlContainer, FormGroupDirective } from '@angular/forms';

import * as $ from 'jquery';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-recent-shipping-detail',
  templateUrl: './recent-shipping-detail.component.html',
  styleUrls: ['./recent-shipping-detail.component.scss']
})
export class RecentShippingDetailComponent implements OnInit {

  @Input() recentShippingAddress: any;
  @Output() autofillrecentShippingAddress = new EventEmitter<any>()

  public isSameRecentAddressControl: FormControl = new FormControl(false);
  checkedRecentShippingAddress: any;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkedRecentShippingAddress = this.fb.group({
      isSameRecentAddressControl: [this.recentShippingAddress]
    });

    $('input.recentSourceAddressCheckbox').on('change', function () {
      $('input.recentSourceAddressCheckbox').not(this).prop('checked', false);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.checkedRecentShippingAddress.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.checkedRecentShippingAddress.value));
    }
  }

  myChange() {
    //console.log(`CheckBox clicked : ${JSON.stringify(this.checkedRecent.value)}`);    
    this.autofillrecentShippingAddress.emit(this.checkedRecentShippingAddress.value) //emitting event to the parent with value
  }
}
