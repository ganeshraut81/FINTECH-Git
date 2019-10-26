import { AbstractControl} from '@angular/forms';

export function OnlyNumberValidator(control: AbstractControl) {
  //validate(control: AbstractControl): { [key: string]: boolean } | null {
    let regEx = /^[0-9\s]*$/;
    if (control.value && !regEx.test(control.value)) {
      return { 'invalidNumber': true };
    }
    return null;
  }

