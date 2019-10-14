import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl , FormGroup} from '@angular/forms';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-create',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  createMainForm = new FormGroup({
    transportationChk: new FormControl(''),
    packingChk: new FormControl(''),
    warehouseChk: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {

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
      $(".pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
          $(this).parent().prev().fadeIn('slow');
          $(this).parent().css({
          'display': 'none'
          });
          // Removing Class Active To Show Steps Backward;
          if( $(".stepicon:last").hasClass('active')){
          {
              $(".stepicon:last").removeClass('active');
            }
          }
          $('.active').prev(".traversed:last").removeClass('traversed');

    
      });
      
  });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    alert("order has been placed!");
    console.warn(this.createMainForm.value);
  }

}
