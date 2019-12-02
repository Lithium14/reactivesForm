import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegex = RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  const valid = emailRegex.test(control.value);

  const erros = {
    email: {
      rules: 'Something is missing Bro'
    }
  };
  return !valid ? erros : null;
}
