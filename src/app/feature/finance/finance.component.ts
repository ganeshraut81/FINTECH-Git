import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {
  logInForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    // console.log(this.logInForm.controls);
    return this.logInForm.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.logInForm.invalid) {
      console.log("Invalid");
        return;
    }
    console.log("Button Clicked");
    this.router.navigateByUrl("homePage");
 }

}
