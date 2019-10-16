import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ControlContainer, FormGroupDirective } from '@angular/forms';
import * as $ from 'jquery';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-saved-packing-detail',
  templateUrl: './saved-packing-detail.component.html',
  styleUrls: ['./saved-packing-detail.component.scss']
})
export class SavedPackingDetailComponent implements OnInit {

  @Input() savedPackingAddress: any;
  @Output() autofillsavedPackingAddress = new EventEmitter<any>();

  public isSameSavedPackingAddressControl: FormControl = new FormControl(false);
  checkedSavedPackingAddress: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checkedSavedPackingAddress = this.fb.group({
      isSameSavedPackingAddressControl: [this.savedPackingAddress]
    });

    $('input.savedPackagingAddressCheckbox').on('change', function () {
      $('input.savedPackagingAddressCheckbox').not(this).prop('checked', false);
    });
    //console.log(this.checked.value);  
  }
  onSubmit() {
    this.submitted = true;
    if (!this.checkedSavedPackingAddress.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.checkedSavedPackingAddress.value));
    }
  }

  myChange() {
    //console.log(`CheckBox clicked : ${JSON.stringify(this.checkedSavedPackingAddress.value)}`);    
    this.autofillsavedPackingAddress.emit(this.checkedSavedPackingAddress.value) //emitting event to the parent with value
  }

}
