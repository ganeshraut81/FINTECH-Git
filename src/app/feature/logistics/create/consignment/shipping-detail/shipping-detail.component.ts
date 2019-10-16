import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AddressDetailsService } from '../../../../service/addressDetails.service';
import { SourceSavedAddressService } from '../../../../service/sourceSavedAddress.service';
import { RecentSavedAddressService } from '../../../../service/recentSavedAddress.service';
import { Address } from 'src/app/feature/models/address.model';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.scss']
})
export class ShippingDetailComponent implements OnInit {
  @Input() parentForm: FormGroup;
  addrForm2 = new FormGroup({
  
  });

  addrForm1 = new FormGroup({
  
  });
  shipmentDetailForm: FormGroup;
  submitted = false;
  addresses: any;
  sourceSavedAddresses: Address[] = [];
  recentSavedAddresses: Address[] = [];

  constructor(private fb: FormBuilder, private addressDetails: AddressDetailsService,
    private sourceSavedAddress: SourceSavedAddressService, private recentSavedAddress: RecentSavedAddressService) { }

  ngOnInit() {

    this.shipmentDetailForm = this.fb.group({
      // addressTitle: [''],
      // state: [''],
      // pincode: [''],
      // consignorName: [''],
      // consignorMobile: [''],
      // consignorAddress: [''],
      // consignorCity: [''],
      // pickupDate: [''],
      // numberOfPackedUnit: ['', Validators.required]
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
}
