import { HttpClient } from '@angular/common/http';
import { SourceSavedAddressService } from '../../../../service/sourceSavedAddress.service';
import { Address } from './../../../../../models/Address.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ControlContainer, FormGroupDirective } from '@angular/forms';

import * as $ from 'jquery';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-saved-destination-detail',
  templateUrl: './saved-destination-detail.component.html',
  styleUrls: ['./saved-destination-detail.component.scss']
})
export class SavedDestinationDetailComponent implements OnInit {

  @Input() savedDestinationAddress: any;
  @Output() autofillsavedDestinationAddress = new EventEmitter<any>()

  public isSameSavedDestinationAddressControl: FormControl = new FormControl(false);
  checkedSavedDestinationAddress: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkedSavedDestinationAddress = this.fb.group({
      isSameSavedDestinationAddressControl: [this.savedDestinationAddress]
    });

    $('input.savedDestinationAddressCheckbox').on('change', function () {
      $('input.savedDestinationAddressCheckbox').not(this).prop('checked', false);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.checkedSavedDestinationAddress.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.checkedSavedDestinationAddress.value));
    }
  }

  myChange() {
    //console.log(`CheckBox clicked : ${JSON.stringify(this.checked.value)}`);    
    this.autofillsavedDestinationAddress.emit(this.checkedSavedDestinationAddress.value) //emitting event to the parent with value
  }
}