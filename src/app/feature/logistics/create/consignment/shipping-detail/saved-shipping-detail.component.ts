import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ControlContainer, FormGroupDirective } from '@angular/forms';
import * as $ from 'jquery';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-saved-shipping-detail',
  templateUrl: './saved-shipping-detail.component.html',
  styleUrls: ['./saved-shipping-detail.component.scss']
})
export class SavedShippingDetailComponent implements OnInit {

  @Input() savedShippingAddress: any;
  @Output() autofillsavedShippingAddress = new EventEmitter<any>()

  public isSameSavedAddressControl: FormControl = new FormControl(false);
  checkedSavedShippingAddress: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkedSavedShippingAddress = this.fb.group({
      isSameSavedAddressControl: [this.savedShippingAddress]
    });

    $('input.savedSourceAddressCheckbox').on('change', function () {
      $('input.savedSourceAddressCheckbox').not(this).prop('checked', false);
    });
    //console.log(this.checked.value);   
  }

  onSubmit() {
    this.submitted = true;
    if (!this.checkedSavedShippingAddress.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.checkedSavedShippingAddress.value));
    }
  }

  myChange() {
    //console.log(`CheckBox clicked : ${JSON.stringify(this.checked.value)}`);    
    this.autofillsavedShippingAddress.emit(this.checkedSavedShippingAddress.value) //emitting event to the parent with value
  }

}
