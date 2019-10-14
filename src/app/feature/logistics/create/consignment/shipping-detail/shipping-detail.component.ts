import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AddressDetailsService } from '../../../../service/addressDetails.service';
import { SourceSavedAddressService } from '../../../../service/sourceSavedAddress.service';
import { RecentSavedAddressService } from '../../../../service/recentSavedAddress.service';
import { Address } from './../../../../../models/Address.model';


@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.scss']
})
export class ShippingDetailComponent implements OnInit {

  shipmentDetailForm: FormGroup;
  submitted = false;
  addresses: any;
  sourceSavedAddresses: Address[] = [];
  recentSavedAddresses: Address[] = [];

  constructor(private fb: FormBuilder, private addressDetails: AddressDetailsService,
    private sourceSavedAddress: SourceSavedAddressService, private recentSavedAddress: RecentSavedAddressService) { }

  ngOnInit() {
    this.shipmentDetailForm = this.fb.group({
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
        //console.log(`Slide array :${JSON.stringify(this.addresses)}`);
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
  }

  get f() {
    //console.log(this.logInForm.controls);
    return this.shipmentDetailForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.shipmentDetailForm.valid) {
      console.log("Invalid");
      return;
    } else {
      //console.log(JSON.stringify(this.shipmentDetailForm.value));
    }
  }

  fromChildSavedShipping(e) {
    console.log(`Parent:${JSON.stringify(e)}`);
    this.shipmentDetailForm = this.fb.group({
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

  fromChildRecentShipping(e) {
    console.log(`Parent:${JSON.stringify(e)}`);
    this.shipmentDetailForm = this.fb.group({
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
