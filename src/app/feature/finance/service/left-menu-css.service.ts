import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeftMenuCssService {

  private dataCssProp = new BehaviorSubject(0);

  constructor() { }

  //this is what your components subsribes to
  currentData(): Observable<number> {
    return this.dataCssProp.asObservable();
  }
  //this function allows you to change the value to be accessed by other components
  changeData(args: number) {
    this.dataCssProp.next(args);
  }
}
