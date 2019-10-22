import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'finance-view-status',
  templateUrl: './finance-view-status.component.html',
  styleUrls: ['./finance-view-status.component.scss']
})
export class FinanceViewStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
 
    $("#tableAccordionClick").click(function(){
      $(".tableAccordion").toggle(500);
      $('.tableAccordionArrow').toggleClass('tableAccordionArrowRotate');
    });
  }
  

}
