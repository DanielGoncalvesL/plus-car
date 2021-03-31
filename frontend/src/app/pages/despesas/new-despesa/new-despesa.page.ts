import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
    protected navController: NavController,
  ) {}

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

  async submit() {

  }

  clean(field ? : string) {
    switch (field) {

  }

  }
}
