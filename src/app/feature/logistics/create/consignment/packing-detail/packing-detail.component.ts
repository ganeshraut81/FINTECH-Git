import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-packing-detail',
  templateUrl: './packing-detail.component.html',
  styleUrls: ['./packing-detail.component.scss']
})
export class PackingDetailComponent implements OnInit {

  packagingDetailForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.packagingDetailForm = this.fb.group({
      packageTitle: [''],
      quantityPerPackedUnit: ['', Validators.required],
      numberOfPackedUnits: ['', Validators.required],
      weightOfPackedUnit: ['', Validators.required],
      unitOfMeasure: ['', Validators.required],
      dimensionsOfPackedUnit: ['', Validators.required]
    });
  }

  get f() {
    //console.log(this.logInForm.controls);
    return this.packagingDetailForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.packagingDetailForm.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.packagingDetailForm.value));
    }
  }
}
