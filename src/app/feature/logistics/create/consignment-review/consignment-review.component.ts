import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-consignment-review',
  templateUrl: './consignment-review.component.html',
  styleUrls: ['./consignment-review.component.scss']
})
export class ConsignmentReviewComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor(private router:Router) { }

  ngOnInit() {
    let formData = this.parentForm.value;
    let FormEmail = formData.email;

    $(document).ready(function(){
      $(document).on('click', '#edtbtn', function(event) { 
        event.preventDefault(); 
        $("#editbkbtn").click(); 
    });
    
    });
  }

  confirm(){
    this.router.navigateByUrl('logistics/provider')
  }

  showData(){
    let formData = this.parentForm.value;
    console.log(formData);
    let FormEmail = formData.email;
    console.log(FormEmail);
    
  }

}
