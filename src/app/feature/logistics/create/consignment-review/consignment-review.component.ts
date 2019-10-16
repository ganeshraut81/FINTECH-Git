import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consignment-review',
  templateUrl: './consignment-review.component.html',
  styleUrls: ['./consignment-review.component.scss']
})
export class ConsignmentReviewComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  confirm(){
    this.router.navigateByUrl('logistics/provider')
  }

}
