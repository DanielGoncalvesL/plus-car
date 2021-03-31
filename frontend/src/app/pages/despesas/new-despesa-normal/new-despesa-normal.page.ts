import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-new-despesa-normal',
  templateUrl: './new-despesa-normal.page.html',
  styleUrls: ['./new-despesa-normal.page.scss'],
})
export class NewDespesaNormalPage implements OnInit {

  isEnable: any;
  brandDisabled: true;

  despesaForm = new FormGroup({
    
  });


  constructor(

  ) {}

  ngOnInit() {}

  async submit() {

  }

  clean(field ? : string) {
    switch (field) {
     
  }

  }
}
