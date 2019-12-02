import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  username = new FormControl('Fadi');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  zipCode = new FormControl('');
  country = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  createUser() {
    this.username.setValue('');
  }


}
