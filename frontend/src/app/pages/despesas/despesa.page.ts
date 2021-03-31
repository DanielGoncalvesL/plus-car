import { Component, OnInit } from '@angular/core';
import {
  NavController,
  ToastController
} from '@ionic/angular';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.page.html',
  styleUrls: ['./despesa.page.scss'],
})
export class DespesaPage implements OnInit {

  constructor(protected navController: NavController) { }

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

}
