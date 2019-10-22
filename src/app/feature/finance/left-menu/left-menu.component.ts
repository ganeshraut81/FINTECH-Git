import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LeftMenuCssService } from '../service/left-menu-css.service';

@Component({
  selector: 'finance-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  leftMenuCssOption: number = 0;
  @Output() clicked = new EventEmitter<any>()

  constructor(private router: Router, private leftMenuCss: LeftMenuCssService) { }

  ngOnInit() {
    this.leftMenuCss.currentData().subscribe((args: number) => {
      this.leftMenuCssOption = args;
    });
  }

  onClick(stringEvent: string, options: number) {
    this.leftMenuCssOption = options;
    this.leftMenuCss.changeData(this.leftMenuCssOption);
    this.clicked.emit(stringEvent);
  }

}
