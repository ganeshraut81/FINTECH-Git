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
    firstName: new FormControl(''),
    cityName: new FormControl(''),
    companyName: new FormControl('')
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
    
      });
      // Validating All Input And Textarea Fields
      $(".submit_btn").click(function(e) {
      if ($('input').val() == "" || $('textarea').val() == "") {
      //alert("*All Fields are mandatory*");
      return false;
      } else {
      return true;
      }
      });
  });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    alert("Order is placed successfully!");
  }

}
