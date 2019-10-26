import { Component, OnInit } from '@angular/core';
import { finData } from 'src/app/feature/fin-admin/service/finData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fin-admin',
  templateUrl: './fin-admin.component.html',
  styleUrls: ['./fin-admin.component.scss']
})
export class DashboardComponent implements OnInit {
  orderDetails: any;

  constructor(private router: Router, private findata: finData) { }

  ngOnInit() {
    this.findata.getFinData().subscribe(
      data => {
        this.orderDetails = data['orderDetails'];
        //console.log(this.orderDetails);
      }
    )
  }

}
