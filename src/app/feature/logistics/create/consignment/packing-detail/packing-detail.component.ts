import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Packaging } from './../../../../../models/packaging.model';
import { PackagingDetailsService } from '../../../../service/packagingDetails.service';

@Component({
  selector: 'app-packing-detail',
  templateUrl: './packing-detail.component.html',
  styleUrls: ['./packing-detail.component.scss']
})
export class PackingDetailComponent implements OnInit {
  @Input() parentForm: FormGroup;
  //packagingDetailForm: FormGroup;
  submitted = false;
  savedPackages: Packaging[] = [];

  constructor(private fb: FormBuilder, private packagingDetails: PackagingDetailsService) { }

  ngOnInit() {
    // this.parentForm = this.fb.group({
    //   packageTitle: [''],
    //   quantityPerPackedUnit: ['', Validators.required],
    //   numberOfPackedUnits: ['', Validators.required],
    //   weightOfPackedUnit: ['', Validators.required],
    //   unitOfMeasure: ['', Validators.required],
    //   dimensionsOfPackedUnitLength: ['', Validators.required],
    //   dimensionsOfPackedUnitBreadth: ['', Validators.required],
    //   dimensionsOfPackedUnitHeight: ['', Validators.required]
    // });
    this.packagingDetails.getPackagingDetails().subscribe(
      (data) => {
        //console.log(`Output: ${JSON.stringify(data['packagingDetails'])}`);
        this.savedPackages = data['packagingDetails'];
      }
    );
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

  fromChildSavedPackagingAddress(e) {
    console.log(`Parent:${JSON.stringify(e)}`);
    this.parentForm = this.fb.group({
      packageTitle: [e.isSameSavedPackingAddressControl.packageTitle],
      quantityPerPackedUnit: [e.isSameSavedPackingAddressControl.quantityPerPackedUnit],
      numberOfPackedUnits: [e.isSameSavedPackingAddressControl.numberOfPackedUnits],
      weightOfPackedUnit: [e.isSameSavedPackingAddressControl.weightOfPackedUnit],
      unitOfMeasure: [e.isSameSavedPackingAddressControl.unitOfMeasure],
      dimensionsOfPackedUnitLength: [e.isSameSavedPackingAddressControl.dimensionsOfPackedUnitLength],
      dimensionsOfPackedUnitBreadth: [e.isSameSavedPackingAddressControl.dimensionsOfPackedUnitBreadth],
      dimensionsOfPackedUnitHeight: [e.isSameSavedPackingAddressControl.dimensionsOfPackedUnitHeight],
      //dimensionsOfPackedUnit: [e.isSameSavedPackingAddressControl.]
    });
  }
}
