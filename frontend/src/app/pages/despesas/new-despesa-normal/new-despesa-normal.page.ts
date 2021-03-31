import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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
