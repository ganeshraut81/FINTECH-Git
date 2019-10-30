import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

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
      enterTenure: [''],
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
