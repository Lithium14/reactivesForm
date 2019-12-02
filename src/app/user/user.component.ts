import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  userForm = this.fb.group({
    username : [''],
    password : [''],
    email : [''],
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


}
