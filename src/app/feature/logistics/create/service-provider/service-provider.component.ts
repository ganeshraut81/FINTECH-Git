import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { serviceProvidersService } from '../../../service/serviceProviders.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {

  serviceProviders: any;

  constructor(private router: Router, private serviceProvidersService: serviceProvidersService) { }

  ngOnInit() {
    this.serviceProvidersService.getConsignmentReview().subscribe(
      data => {
        console.log(`Service Provider Data: ${JSON.stringify(data)}`)
        this.serviceProviders = data['serviceProviders'];
      }
    )
  }

  onPrevious(){
    this.router.navigateByUrl('/create');
  }

  requestForQuotation(){
    document.getElementById('lbl').innerHTML = "Request Sent";
  }
}
