import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddressDetailsService } from '../../../../service/addressDetails.service'
import { SourceSavedAddressService } from '../../../../service/sourceSavedAddress.service';
import { RecentSavedAddressService } from '../../../../service/recentSavedAddress.service';
import { Address } from './../../../../../models/Address.model';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {

  destinationLocationDetailForm: FormGroup;
  submitted = false;
  addresses: any;
  // states: any[];
  // cities: any[];
  // selectedState: any;
  sourceSavedAddresses: Address[] = [];
  recentSavedAddresses: Address[] = [];

  constructor(private fb: FormBuilder, private addressDetails: AddressDetailsService, private sourceSavedAddress: SourceSavedAddressService,
    private recentSavedAddress: RecentSavedAddressService) { }

  ngOnInit() {
    this.destinationLocationDetailForm = this.fb.group({
      addressTitle: [''],
      state: [''],
      pincode: [''],
      consignorName: [''],
      consignorMobile: [''],
      consignorAddress: [''],
      consignorCity: [''],
      pickupDate: [''],
      numberOfPackedUnit: ['', Validators.required]
    });
    this.addressDetails.address().subscribe(
      data => {
        this.addresses = data['addressDetails'];
        //console.log(`Address details array :${JSON.stringify(this.addresses)}`);
      }
    )
    this.sourceSavedAddress.getSourceSavedAddress().subscribe(
      (data) => {
        //console.log(`Output: ${JSON.stringify(data['address'])}`);
        this.sourceSavedAddresses = data['address'];
      }
    );
    this.recentSavedAddress.getRecentSavedAddress().subscribe(
      (data) => {
        //console.log(`Output: ${JSON.stringify(data['address'])}`);
        this.recentSavedAddresses = data['address'];
      }
    );

    //Trial

    // this.addressDetails.getStates().subscribe(
    //   data => {
    //     this.states = data['statesDetails'];
    //     //console.log(`Address details array :${JSON.stringify(this.addresses)}`);
    //   }
    // )
    // this.addressDetails.getCities().subscribe(
    //   data => {
    //     this.cities = data['citiesDetails'];
    //     //console.log(`Address details array :${JSON.stringify(this.addresses)}`);
    //   }
    // )
    //this.onSelect(this.selectedState.id);
  }

  get f() {
    //console.log(this.logInForm.controls);
    return this.destinationLocationDetailForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.destinationLocationDetailForm.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.destinationLocationDetailForm.value));
    }
  }

  // onSelect(stateId) {
  //   this.states = this.states.filter((item) => item.stateId == stateId);
  // }

  fromChildSavedDestinationShipping(e) {
    //console.log(`Parent:${JSON.stringify(e)}`);
    this.destinationLocationDetailForm = this.fb.group({
      addressTitle: [e.isSameSavedAddressControl.addressTitle],
      state: [e.isSameSavedAddressControl.addressId],
      pincode: [e.isSameSavedAddressControl.pincode],
      // consignorName: [e.isSameSavedAddressControl.consignorName],
      // consignorMobile: [e.isSameSavedAddressControl.consignorMobile],
      consignorAddress: [e.isSameSavedAddressControl.consignorAddress],
      consignorCity: [e.isSameSavedAddressControl.addressId],
      // pickupDate: [e.isSameSavedAddressControl.pickupDate],
       numberOfPackedUnit: ['', Validators.required]
    });
  }

  fromChildRecentDestinationShipping(e) {
    console.log(`Parent:${JSON.stringify(e)}`);
    this.destinationLocationDetailForm = this.fb.group({
      addressTitle: [e.isSameRecentAddressControl.addressTitle],
      state: [e.isSameRecentAddressControl.addressId],
      pincode: [e.isSameRecentAddressControl.pincode],
      // consignorName: [e.isSameRecentAddressControl.consignorName],
      // consignorMobile: [e.isSameRecentAddressControl.consignorMobile],
      consignorAddress: [e.isSameRecentAddressControl.consignorAddress],
      consignorCity: [e.isSameRecentAddressControl.addressId],
      // pickupDate: [e.isSameRecentAddressControl.pickupDate],
      numberOfPackedUnit: ['', Validators.required]
    });
  }
}
