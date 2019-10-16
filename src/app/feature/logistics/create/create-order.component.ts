import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl , FormGroup, FormBuilder,Validators} from '@angular/forms';
import { saveAs } from 'file-saver';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-create',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  parentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.parentForm = this.fb.group({
      //service request
      transportationChk: '',
      packingChk: '',
      warehouseChk: '',
      //product detail
      productImage: ['assets/images/product-image.png'],
      productCategory: [''],
      productSubCategory: [''],
      materials: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.
        pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
      ]],
      //packing detail
      packageTitle: [''],
      packageTitle2: [''],
      quantityPerPackedUnit: ['', Validators.required],
      numberOfPackedUnits: ['', Validators.required],
      weightOfPackedUnit: ['', Validators.required],
      unitOfMeasure: ['', Validators.required],
      dimensionsOfPackedUnit: ['', Validators.required],
      //destn
      addressTitle: [''],
      state: [''],
      pincode: [''],
      consignorName: [''],
      consignorMobile: [''],
      consignorAddress: [''],
      consignorCity: [''],
      pickupDate: [''],
      numberOfPackedUnit: ['', Validators.required],
      //shipping
      addressTitle1: [''],
      state1: [''],
      pincode1: [''],
      consignorName1: [''],
      consignorMobile1: [''],
      consignorAddress1: [''],
      consignorCity1: [''],
      pickupDate1: [''],
      numberOfPackedUnit1: ['', Validators.required],
      
      //shippingsaved

      
    })
    this.parentForm.valueChanges.subscribe(newVal => console.log(newVal))

    $(document).ready(function(){
    
      $(".next_btn").click(function() { // Function Runs On NEXT Button Click
      $(this).parent().next().fadeIn('slow');
      $(this).parent().css({
      'display': 'none'
      });
      // Adding Class Active To Show Steps Forward;
      $('.active').next(".stepicon").addClass('active');
      $('.active').prev(".stepicon").addClass('traversed');
     
      });
    
      $(".pre_btn").click(function() { 
        // Function Runs On PREVIOUS Button Click
          $(this).parent().prev().fadeIn('slow');
          $(this).parent().css({
          'display': 'none'
          });
      });
      //removing active and traversed for backward flow
      $(".prevbtn3").click(function() {
        $(".step4").removeClass("active");
        $(".step3").removeClass("traversed");
      });

      $(".prevbtn2").click(function() {
        $(".step3").removeClass("active");
        $(".step2").removeClass("traversed");
      });

      $(".prevbtn1").click(function() {
        $(".step2").removeClass("active");
        $(".step1").removeClass("traversed");
      });
      
  });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //alert("order has been placed!");
    console.warn(this.parentForm.value);

     //const jsonObject: object = this.parentForm.value;
     //console.log("value is" + jsonObject);
     
    // console.log("Form data saved:" + jsonObject);
    // const jsonObject: object = {
    //   'ServicesRequired': [
    //     {
    //       'Transportation': this.parentForm.transportationChk.value,
    //       'Packing': this.parentForm.packingChk.value,
    //       'Warehouse': this.parentForm.warehouseChk.value,
    //     },
        
    //   ]
    // };

 


// const blob = new Blob([JSON.stringify(jsonObject)], {type : 'application/json'});
// saveAs(blob, 'savedLogisticsFormData.json');

  }

}
