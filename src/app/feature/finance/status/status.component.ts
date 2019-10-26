import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#tableAccordionClick").click(function(){
      $(".tableAccordion").toggle(500);
      $('.tableAccordionArrow').toggleClass('tableAccordionArrowRotate');
    });
  }

}
