import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecentSavedAddressService } from '../../../../service/recentSavedAddress.service';
import { Address } from './../../../../../models/Address.model';
import { FormGroup, FormControl, FormBuilder, Validators, ControlContainer, FormGroupDirective } from '@angular/forms';

import * as $ from 'jquery';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-recent-destination-detail',
  templateUrl: './recent-destination-detail.component.html',
  styleUrls: ['./recent-destination-detail.component.scss']
})
export class RecentDestinationDetailComponent implements OnInit {

  @Input() recentDestinationAddress: any;
  @Output() autofillrecentDestinationAddress = new EventEmitter<any>()

  public isSameRecentDestinationAddressControl: FormControl = new FormControl(false);
  checkedRecentDestination: any;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkedRecentDestination = this.fb.group({
      isSameRecentDestinationAddressControl: [this.recentDestinationAddress]
    });

    $('input.recentDestinationAddressCheckbox').on('change', function () {
      $('input.recentDestinationAddressCheckbox').not(this).prop('checked', false);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.checkedRecentDestination.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.checkedRecentDestination.value));
    }
  }

  myChange() {
    //console.log(`CheckBox clicked : ${JSON.stringify(this.checkedRecent.value)}`);    
    this.autofillrecentDestinationAddress.emit(this.checkedRecentDestination.value) //emitting event to the parent with value
  }

}