import { Component, OnInit } from '@angular/core';
import { DespesaService } from './services/despesa.service';
import { LoadingServiceService } from '../../services/loading-service.service';
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

  constructor(protected navController: NavController, private expenseService: DespesaService, private loadingService: LoadingServiceService) { }

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

  async ionViewWillEnter() {
    this.loadingService.present();
    this.expenses = await this.expenseService.listDespesas();
    this.loadingService.dismiss();
  }
}
