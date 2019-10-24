import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'finance-view-status',
  templateUrl: './finance-view-status.component.html',
  styleUrls: ['./finance-view-status.component.scss']
})
export class FinanceViewStatusComponent implements OnInit {
  nomineeDetailsForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $("#tableAccordionClick").click(function () {
      $(".tableAccordion").toggle(500);
      $('.tableAccordionArrow').toggleClass('tableAccordionArrowRotate');
    });

    //FormGroup
    this.nomineeDetailsForm = this.fb.group({
      availCLI: [''],
      name: [''],
      dateOfBirth: ['', Validators.required],
      relation: [''],
      percentageShare: [''],
      diseases: ['']
    });
  }

  get f() {
    return this.nomineeDetailsForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.nomineeDetailsForm.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.nomineeDetailsForm.value));
    }
  }

}
