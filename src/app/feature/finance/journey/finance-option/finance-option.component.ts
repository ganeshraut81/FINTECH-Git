import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'finance-option',
  templateUrl: './finance-option.component.html',
  styleUrls: ['./finance-option.component.scss']
})
export class FinanceOptionComponent implements OnInit {

  submitted: boolean = false;

  // controls for slider
  loanAmountRequestedControl: FormControl = new FormControl();
  loanTenureControl: FormControl = new FormControl();
 
  loanAmountRequestedOptions: Options = {
    floor: 100000,
    ceil: 5000000,
    translate: (value: number): string => {
      return '&#8377;' + value.toLocaleString('en') + 'L';
    }
  };

  loanTenureOptions: Options = {
    floor: 6,
    ceil: 36,
    translate: (value: number): string => {
      return value + 'M';
    }
  }

  constructor(private fb: FormBuilder) { }
  //FormGroup
  financingOptionForm = this.fb.group({
    unsecuredBusinessLoan: ['unsecuredBusinessLoan'],
    selectOrderID: [{ value: 'XXXXXXXXX', disabled: true }],
    purposeOfLoan: ['', Validators.required],
    loanAmountRequested: [''],
    loanTenure: [''],
  });

  ngOnInit() { }

  get f() {
    return this.financingOptionForm.controls;
  }

  //event for slider to move based on input value
  onLoanAmountSliderChange(e: any) {
    this.loanAmountRequestedControl.setValue(e);
  }
  onloanTenureSliderChange(e: any) {
    this.loanTenureControl.setValue(e);
  }

  onSubmit() {
    this.submitted = true;
    if (!this.financingOptionForm.valid) {
      console.log("Invalid");
      return;
    } else {
      //assigning the slider control value to form field
      this.financingOptionForm.controls.loanAmountRequested.setValue(this.loanAmountRequestedControl.value);
      this.financingOptionForm.controls.loanTenure.setValue(this.loanTenureControl.value);
      console.log(JSON.stringify(this.financingOptionForm.value));
    }
  }

}
