
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController, AlertController } from '@ionic/angular';
import { DashboardService } from './services/dashboard.service';
import { LoadingServiceService } from '../../services/loading-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  currentMonth = 0;
  lastMonth = 0;
  private sizeCircle = 725;
  contas: any;
  profits: any;
  saleVehicles: any;
  // contasUsuario: Conta;
  // usuario: Usuario;
  meses: any = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  constructor(
    protected titleService: Title,
    protected navController: NavController,
    private alertController: AlertController,
    // private contaService: ContaServiceService,
    private dashboardService: DashboardService,
    private loadingService: LoadingServiceService
  ) {
  }

  async ionViewWillEnter() {
    this.loadingService.present();
    this.profits = await this.dashboardService.listProfits();
    this.saleVehicles = await this.dashboardService.listSaleVehicles();
    console.log(this.saleVehicles)
    this.loadingService.dismiss();
  }

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

}
