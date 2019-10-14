import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ControlContainer, FormGroupDirective } from '@angular/forms';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-saved-shipping-detail',
  templateUrl: './saved-shipping-detail.component.html',
  styleUrls: ['./saved-shipping-detail.component.scss']
})
export class SavedShippingDetailComponent implements OnInit {

  @Input() savedShippingAddress: any;
  @Output() toparent = new EventEmitter()

  public isSameSavedAddressControl: FormControl = new FormControl(false);
  checked: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checked = this.fb.group({
      isSameSavedAddressControl: [this.savedShippingAddress]
    })

    $('input.savedAddressCheckbox').on('change', function() {
      $('input.savedAddressCheckbox').not(this).prop('checked', false);  
  });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.checked.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.checked.value));
    }
  }

  myChange() {
    this.toparent.emit(this.checked) //emitting event to the parent with value
  }

}
