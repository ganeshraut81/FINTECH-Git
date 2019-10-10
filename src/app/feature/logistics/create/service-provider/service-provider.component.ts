import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPrevious(){
    this.router.navigateByUrl('/create');
  }
}
