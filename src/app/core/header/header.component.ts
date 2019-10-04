import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    console.log(`U will B directed to Buyer Login page`); 
    // this.router.navigateByUrl('/buyer');
  }

  onFinance()
  {
    console.log(`U will B directed to Finance Login page`);    
  }

  onLogistics()
  {
    console.log(`U will B directed to Finance Login page`);    
  }

}
