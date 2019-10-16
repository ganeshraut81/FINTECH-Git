import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddressDetailsService } from '../../../../service/addressDetails.service'

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {
  @Input() parentForm: FormGroup;
  packageForm1 = new FormGroup({
  
  });

  packageForm2 = new FormGroup({
  
  });

  // destinationLocationDetailForm: FormGroup;
  submitted = false;
  addresses: any;

  constructor(private fb: FormBuilder, private addressDetails: AddressDetailsService) { }

  ngOnInit() {
    // this.destinationLocationDetailForm = this.fb.group({
    //   addressTitle: [''],
    //   state: [''],
    //   pincode: [''],
    //   consignorName: [''],
    //   consignorMobile: [''],
    //   consignorAddress: [''],
    //   consignorCity: [''],
    //   pickupDate: [''],
    //   numberOfPackedUnit: ['', Validators.required]
    // });
    this.addressDetails.address().subscribe(
      data => {
        this.addresses = data['addressDetails'];
        //console.log(`Address details array :${JSON.stringify(this.addresses)}`);
      }
    )
  }

  get f() {
    //console.log(this.logInForm.controls);
    return this.parentForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.parentForm.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.parentForm.value));
    }
  }
}
