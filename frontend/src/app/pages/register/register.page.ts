import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  isEnable: any;
  brandDisabled: true;

  registerForm = new FormGroup({
    
  });

  constructor() { }

  ngOnInit() {
  }

}
