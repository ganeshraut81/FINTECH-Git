import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.scss']
})
export class ConsignmentComponent implements OnInit {
  @Input() parentForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
