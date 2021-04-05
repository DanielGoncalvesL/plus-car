import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NewVehicleService } from '../services/new-vehicle-service.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {

  vehicle: any;

  constructor( public alertController: AlertController, private navController: NavController, private activatedRoute: ActivatedRoute, private vehicleService: NewVehicleService) { }

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }

  }

  async ionViewWillEnter() {
    this.activatedRoute.params.subscribe(async param => {
      if (param['id']) {
        this.vehicle =  await this.vehicleService.findVehicle(param['id']);
        console.log(this.vehicle)
      }
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirme',
      message: '<strong>Deseja confirmar a exclusão?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }


}
