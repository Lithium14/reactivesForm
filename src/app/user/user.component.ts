import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { emailValidator } from '../email-validator';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  userForm = this.fb.group({
    username : [''],
    credentials : this.fb.group({
      password : [''],
      mail : ['', [Validators.required, emailValidator]],
    }),
    adress : this.fb.group({
    street  : [''],
    zipCode :  [''],
    country :  ['']
  }),
});


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.userForm.value);
  }



  click() {
    console.log('totot');

  }
}
