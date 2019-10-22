import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'finance-documents',
  templateUrl: './finance-documents.component.html',
  styleUrls: ['./finance-documents.component.scss']
})
export class FinanceDocumentsComponent implements OnInit {

  detailsForm: FormGroup;
  isTypeOfPartnershipSelected: boolean;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.detailsForm = this.fb.group({
      borrowerName: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      emailId: ['', Validators.required],
      gender: ['', Validators.required],
      educationalQualification: [''],
      permanentAddress: ['', Validators.required],
      permanentAddressRadio: [''],
      businessName: ['', Validators.required],
      dateOfIncorporation: ['', Validators.required],
      numberOfEmployess: [''],
      officeAddress: ['', Validators.required],
      officeAddressCheckbox: ['', Validators.required],
      communicationAddress: ['', Validators.required],
      communicationAddressCheckbox: ['', Validators.required],
      gstin: ['', Validators.required],
      sector: ['', Validators.required],
      industry: ['', Validators.required],
      subIndustry: ['', Validators.required],
      typeOfOwnership: ['', Validators.required],
      partnerShip: ['', Validators.required],
      name: ['', Validators.required],
      email: [''],
      mobile: ['', Validators.required],
      panCard: ['', Validators.required],
      partnershipPercent: ['', Validators.required],
      communicationAddressDetails: ['', Validators.required],
      communicationAddressDetailsCheckbox: ['', Validators.required],
      permanentAddressDetails: ['', Validators.required]
    })
  }

  selectTypeOfPartnershipInput(event) {
    let selected = event.target.value;
    if (selected == "Partnership") {
      this.isTypeOfPartnershipSelected = true;
    } else {
      this.isTypeOfPartnershipSelected = false;
    }
  }
  
  onSubmit() {
    this.submitted = true;
    if (!this.detailsForm.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.detailsForm.value));
    }
  }

}
