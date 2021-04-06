import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingServiceService } from '../../services/loading-service.service';
import { DashboardService } from '../dashboard/services/dashboard.service';

@Component({
  selector: 'app-sale-vehicles',
  templateUrl: './sale-vehicles.page.html',
  styleUrls: ['./sale-vehicles.page.scss'],
})
export class SaleVehiclesPage implements OnInit {

  saleVehicle: any;

  constructor(
    private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingServiceService
  ) { }

  ngOnInit() {
  }


  async ionViewWillEnter() {
    this.loadingService.present();
    this.activatedRoute.params.subscribe(async param => {
      if (param['id']) {
        this.saleVehicle = await this.dashboardService.findSaleVehicle(param['id']);
      }
    });
    this.loadingService.dismiss();
  }
}
