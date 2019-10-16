import { Component, OnInit } from '@angular/core';
import { orderHistoryService } from '../../service/orderHistory.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  orderHistories: any;

  constructor(private orderHistoryService: orderHistoryService) { }

  ngOnInit() {
    this.orderHistoryService.getOrderHistory().subscribe(
      data => {
        console.log(`Order History Data: ${JSON.stringify(data)}`)
        this.orderHistories = data['orderHistories'];
      }
    )
  }

}
