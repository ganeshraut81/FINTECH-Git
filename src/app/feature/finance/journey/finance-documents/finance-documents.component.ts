import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { OnlyNumberValidator } from 'src/app/validators/custom-validators/onlyNumberValidator';

@Component({
  selector: 'finance-documents',
  templateUrl: './finance-documents.component.html',
  styleUrls: ['./finance-documents.component.scss']
})
export class FinanceDocumentsComponent implements OnInit {

  detailsForm: FormGroup;
  isTypeOfPartnershipSelected: boolean;
  submitted: boolean = false;
  addPartnerDisplay: boolean;
  showOTP: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.detailsForm = this.fb.group({
      borrowerName: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      mobileNumber: ['', Validators.required, OnlyNumberValidator],
      emailId: ['', [Validators.required, Validators.
        pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ]],
      gender: ['', Validators.required],
      educationalQualification: [''],

      permanentAddressHouseNo: ['', Validators.required],
      permanentAddressStreet: ['', Validators.required],
      permanentAddressCity: ['', Validators.required],
      permanentAddressState: ['', Validators.required],
      permanentAddressPincode: ['', Validators.required, OnlyNumberValidator],
      permanentAddressRadio: [''],

      businessName: ['', Validators.required],
      age: ['', Validators.required],
      numberOfEmployess: [''],

      officeAddressHouseNo: ['', Validators.required],
      officeAddressStreet: ['', Validators.required],
      officeAddressCity: ['', Validators.required],
      officeAddressState: ['', Validators.required],
      officeAddressPincode: ['', Validators.required],
      officeAddressCheckbox: ['', Validators.required],

      communicationAddressHouseNo: ['', Validators.required],
      communicationAddressStreet: ['', Validators.required],
      communicationAddressCity: ['', Validators.required],
      communicationAddressState: ['', Validators.required],
      communicationAddressPincode: ['', Validators.required],
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

      communicationAddressDetailsHouseNo: ['', Validators.required],
      communicationAddressDetailsStreet: ['', Validators.required],
      communicationAddressDetailsCity: ['', Validators.required],
      communicationAddressDetailsState: ['', Validators.required],
      communicationAddressDetailsPincode: ['', Validators.required],
      communicationAddressDetailsCheckbox: ['', Validators.required],

      officeAddressDetailsHouseNo: ['', Validators.required],
      officeAddressDetailsStreet: ['', Validators.required],
      officeAddressDetailsCity: ['', Validators.required],
      officeAddressDetailsState: ['', Validators.required],
      officeAddressDetailsPincode: ['', Validators.required],
    })
  }

  get f() {
    //console.log(this.logInForm.controls);
    return this.detailsForm.controls;
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
      //need to post to dB
      console.log(JSON.stringify(this.detailsForm.value));
      //this.http.post(){}
      const result = Object.assign({}, this.detailsForm.value);
      console.log(result);
      console.log(`name: ${result.name}, percent: ${result.partnershipPercent}`);
    }
  }

  onAddPartner() {
    this.addPartnerDisplay = true;
    console.log(`partner`);
  }

  onShowOTP() {
    this.showOTP = true;
    console.log(`OTP`);
  }

}
