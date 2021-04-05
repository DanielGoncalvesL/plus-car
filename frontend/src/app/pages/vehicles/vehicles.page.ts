import {
  Component,
  OnInit
} from '@angular/core';
import {
  NewVehicleService
} from './services/new-vehicle-service.service';
import {
  ModalController,
  NavController,
  ToastController
} from '@ionic/angular';
 

import {ModalcarPage} from '../modalcar/modalcar.page';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {

  vehicles: any;

  constructor(private navController: NavController, private vehicleService: NewVehicleService, private modalCtrl: ModalController) {}

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

  async ionViewWillEnter() {
    this.vehicles = await this.vehicleService.listVehicles();
  }

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: ModalcarPage
    });

    modal.present();
  }

}
