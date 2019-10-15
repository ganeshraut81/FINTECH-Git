import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  logInForm: FormGroup;
  submitted = false;
  userObject = {};
  userProfiles: String[];
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.
        pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roleName: ['Buyer']
    });
  }

  get f() {
    return this.logInForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.logInForm.invalid) { return; }
    this.userObject = this.logInForm.value;
    this.login(this.userObject);
  }

  login(userData) {
    this.userService.Login(userData).subscribe(
      data => {
        this.userProfiles = JSON.parse(data);
        let prof = Object.values(this.userProfiles);
        for (var i = 0; i < (prof[0]).length; i++) {
          let name = prof[0][i];
          //console.log(`Email : ${JSON.stringify(name['email'])} Password: ${JSON.stringify(name['password'])} RoleName: ${JSON.stringify(name['roleName'])}`);
          if (userData.email === name['email'] && userData.password === name['password'] && userData.roleName === name['roleName']) {
            if (userData.roleName === 'Buyer') {
              //this.router.navigateByUrl("buyerHomePage");
              this.router.navigateByUrl('');
            } else if (userData.roleName === 'Seller') {
              //this.router.navigateByUrl("sellerHomePage");
              this.router.navigateByUrl('');
            } else {
              alert("Invalid Username or Password");
            }
          }
        }
      });
  }
}
