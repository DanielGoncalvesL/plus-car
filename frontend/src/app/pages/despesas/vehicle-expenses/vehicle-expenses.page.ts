import {
  Component,
  OnInit
} from '@angular/core';
import {
  NavController
} from '@ionic/angular';
import {
  DespesaService
} from '../services/despesa.service';
import {
  ActivatedRoute
} from '@angular/router';
import {
  LoadingServiceService
} from '../../../services/loading-service.service';

@Component({
  selector: 'app-vehicle-expenses',
  templateUrl: './vehicle-expenses.page.html',
  styleUrls: ['./vehicle-expenses.page.scss'],
})
export class VehicleExpensesPage implements OnInit {

  vehicleExpenses: any;

  constructor(private navController: NavController, private expenseService: DespesaService, private activatedRoute: ActivatedRoute, private loadingService: LoadingServiceService) {}

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

  async ionViewWillEnter() {
    this.loadingService.present();
    this.activatedRoute.params.subscribe(async param => {
      if (param['id']) {
        this.vehicleExpenses = await this.expenseService.findExpenseVehicle(param['id']);
        console.log(this.vehicleExpenses);
      }
    });
    this.loadingService.dismiss();
  }

}
