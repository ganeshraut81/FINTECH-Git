import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../../../core/service/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  @Input() parentForm: FormGroup;
  products: any;
  // productDetailForm: FormGroup;
  submitted = false;

  constructor(private productsService: ProductsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.productsService.newArrivalProducts().subscribe(
      data => {
        this.products = data['products'];
      }
    )

   
  }

  get f() {
    //console.log(this.logInForm.controls);
    return this.parentForm.controls;
  }

  // onSubmit() {
  //   this.submitted = true;
  //   if (!this.parentForm.valid) {
  //     console.log("Invalid");
  //     return;
  //   } else {
  //     console.log(JSON.stringify(this.parentForm.value));
  //   }
  // }
}
