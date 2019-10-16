import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import * as $ from 'jquery';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {
  logInForm: FormGroup;
  submitted = false;
  userObject = {};
  userProfiles: String[];
  myModal = document.getElementById('myModal');

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    // $(document).ready(function(){
    //   $('#myModal').modal('hide');
    // })

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

  // login(userData) {
  //   this.userService.Login(userData).subscribe(
  //     data => {
  //       this.userProfiles = JSON.parse(data);
  //       let prof = Object.values(this.userProfiles);
  //       for (var i = 0; i < (prof[0]).length; i++) {
  //         console.log('checking');
  //         let name = prof[0][i];
  //         console.log(`Email : ${JSON.stringify(name['email'])} Password: ${JSON.stringify(name['password'])} RoleName: ${JSON.stringify(name['roleName'])}`);
  //         if (userData.email === name['email'] && userData.password === name['password']) {
  //           if (userData.email === name['email'] && userData.password === name['password'] && userData.roleName === name['roleName']){
  //             //console.log(userData.roleName);
  //             if (userData.roleName === 'Buyer') {
  //               console.log('Buyer');
  //               $('#myModal').modal('hide');
  //               this.router.navigateByUrl("buyerHomePage");
  //             } else if (userData.roleName === 'Seller') {
  //               console.log('Seller');
  //               $('#myModal').modal('hide');
  //               this.router.navigateByUrl("sellerHomePage");
  //             } 
  //           }
  //           else {
  //             $('#myModal').modal('hide');
  //             console.log('Incorrect');
  //             alert("Invalid Username or Password");
  //             break;
  //           }
  //         }
  //       }
  //     });
  // }
  login(userData) {
    this.userService.Login(userData).subscribe(
      data => {
        this.userProfiles = JSON.parse(data);
        let prof = Object.values(this.userProfiles);
        for (var i = 0; i < (prof[0]).length; i++) {
          let name = prof[0][i];
          console.log(`Email : ${JSON.stringify(name['email'])} Password: ${JSON.stringify(name['password'])} RoleName: ${JSON.stringify(name['roleName'])}`);
          if (userData.email === name['email'] && userData.password === name['password'] && userData.roleName === name['roleName']) {
            if (userData.roleName === 'Buyer') {
              $('#myModal').modal('hide');
              //this.router.navigateByUrl("buyerHomePage");
              this.router.navigateByUrl("homePage");
            } else if (userData.roleName === 'Seller') {
              $('#myModal').modal('hide');
              //this.router.navigateByUrl("sellerHomePage");
              this.router.navigateByUrl("homePage");
            } else {
              $('#myModal').modal('hide');
              alert("Invalid Username or Password");
            }
          }
        }
      });
  }
}