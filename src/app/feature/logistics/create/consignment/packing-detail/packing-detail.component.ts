import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-packing-detail',
  templateUrl: './packing-detail.component.html',
  styleUrls: ['./packing-detail.component.scss']
})
export class PackingDetailComponent implements OnInit {
  @Input() parentForm: FormGroup;
  
  // packagingDetailForm: FormGroup;
  // packagingDetailForm2: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.parentForm = this.fb.group({
    //   packageTitle: [''],
    //   quantityPerPackedUnit: ['', Validators.required],
    //   numberOfPackedUnits: ['', Validators.required],
    //   weightOfPackedUnit: ['', Validators.required],
    //   unitOfMeasure: ['', Validators.required],
    //   dimensionsOfPackedUnit: ['', Validators.required]
    // });
    // this.parentForm = this.fb.group({
    //   packageTitle2: [''],
    // });
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
