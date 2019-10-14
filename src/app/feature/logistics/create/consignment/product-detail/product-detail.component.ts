import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../../../core/service/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {

  products: any;
  productDetailForm: FormGroup;
  submitted = false;

  constructor(private productsService: ProductsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.productsService.newArrivalProducts().subscribe(
      data => {
        this.products = data['products'];
      }
    )

    this.productDetailForm = this.fb.group({
      productImage: ['assets/images/product-image.png'],
      productCategory: [''],
      productSubCategory: [''],
      materials: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.
        pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
      ]],
    });
  }

  get f() {
    //console.log(this.logInForm.controls);
    return this.productDetailForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.productDetailForm.valid) {
      console.log("Invalid");
      return;
    } else {
      console.log(JSON.stringify(this.productDetailForm.value));
    }
  }
}
