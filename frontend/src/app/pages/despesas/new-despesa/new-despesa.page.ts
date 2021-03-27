import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-new-despesa',
  templateUrl: './new-despesa.page.html',
  styleUrls: ['./new-despesa.page.scss'],
})
export class NewDespesaPage implements OnInit {

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
