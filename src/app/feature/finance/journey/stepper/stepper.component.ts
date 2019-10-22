import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'finance-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

      $(".next_btn").click(function () {
        // Function Runs On NEXT Button Click
        $(this).parent().next().fadeIn('slow');
        $(this).parent().css({
          'display': 'none'
        });
        // Adding Class Active To Show Steps Forward;
        $('.active').next(".stepicon").addClass('active');
        $('.active').prev(".stepicon").addClass('traversed');

      });

      $(".pre_btn").click(function () {
        // Function Runs On PREVIOUS Button Click
        $(this).parent().prev().fadeIn('slow');
        $(this).parent().css({ 'display': 'none' });
      });
      //removing active and traversed for backward flow
      $(".prevbtn3").click(function () {
        $(".step4").removeClass("active");
        $(".step3").removeClass("traversed");
      });

      $(".prevbtn2").click(function () {
        $(".step3").removeClass("active");
        $(".step2").removeClass("traversed");
      });

      $(".prevbtn1").click(function () {
        $(".step2").removeClass("active");
        $(".step1").removeClass("traversed");
      });

    });
  }

  onBtnClick() { }
}
