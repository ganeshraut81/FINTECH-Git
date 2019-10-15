import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddressDetailsService } from '../../../../service/addressDetails.service'
import { DestinationSavedAddressService } from '../../../../service/destinationSavedAddress.service';
import { DestinationRecentAddressService } from '../../../../service/destinationRecentAddress.service';
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
  destinationSavedAddresses: Address[] = [];
  destinationRecentAddresses: Address[] = [];

  constructor(private fb: FormBuilder, private addressDetails: AddressDetailsService, private destinationSavedAddress: DestinationSavedAddressService,
    private destinationRecentAddress: DestinationRecentAddressService) { }

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
    this.destinationSavedAddress.getDestinationSavedAddress().subscribe(
      (data) => {
        //console.log(`Output: ${JSON.stringify(data['destinationSavedAddress'])}`);
        this.destinationSavedAddresses = data['destinationSavedAddress'];
      }
    );
    this.destinationRecentAddress.getDestinationRecentAddress().subscribe(
      (data) => {
        //console.log(`Output: ${JSON.stringify(data['destinationRecentAddress'])}`);
        this.destinationRecentAddresses = data['destinationRecentAddress'];
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
      addressTitle: [e.isSameSavedDestinationAddressControl.addressTitle],
      state: [e.isSameSavedDestinationAddressControl.addressId],
      pincode: [e.isSameSavedDestinationAddressControl.pincode],
      // consignorName: [e.isSameSavedAddressControl.consignorName],
      // consignorMobile: [e.isSameSavedAddressControl.consignorMobile],
      consignorAddress: [e.isSameSavedDestinationAddressControl.consignorAddress],
      consignorCity: [e.isSameSavedDestinationAddressControl.addressId],
      // pickupDate: [e.isSameSavedAddressControl.pickupDate],
       numberOfPackedUnit: ['', Validators.required]
    });
  }

  fromChildRecentDestinationShipping(e) {
    console.log(`Parent:${JSON.stringify(e)}`);
    this.destinationLocationDetailForm = this.fb.group({
      addressTitle: [e.isSameRecentDestinationAddressControl.addressTitle],
      state: [e.isSameRecentDestinationAddressControl.addressId],
      pincode: [e.isSameRecentDestinationAddressControl.pincode],
      // consignorName: [e.isSameRecentAddressControl.consignorName],
      // consignorMobile: [e.isSameRecentAddressControl.consignorMobile],
      consignorAddress: [e.isSameRecentDestinationAddressControl.consignorAddress],
      consignorCity: [e.isSameRecentDestinationAddressControl.addressId],
      // pickupDate: [e.isSameRecentAddressControl.pickupDate],
      numberOfPackedUnit: ['', Validators.required]
    });
  }
}
