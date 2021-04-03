import { Component, OnInit } from '@angular/core';
import { DespesaService } from './services/despesa.service';
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

  expenses: any;

  constructor(protected navController: NavController, private expenseService: DespesaService) { }

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

  async ionViewWillEnter() {
    this.expenses = await this.expenseService.listDespesas();
  }

}
