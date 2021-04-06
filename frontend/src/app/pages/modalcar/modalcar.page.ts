import {
  Component,
  OnInit
} from '@angular/core';
import {
  AlertController,
  ModalController
} from '@ionic/angular';
import {
  NewVehicleService
} from '../vehicles/services/new-vehicle-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modalcar',
  templateUrl: './modalcar.page.html',
  styleUrls: ['./modalcar.page.scss'],
})
export class ModalcarPage implements OnInit {

  vehicle: any;

  constructor(private modalCrtl: ModalController, public alertController: AlertController, private vehicleService: NewVehicleService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {}

  close() {
    this.modalCrtl.dismiss();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirme',
      message: '<strong>Deseja confirmar a exclusão?</strong>',
      buttons: [{
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
      }]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }


  async ionViewWillEnter() {
    this.activatedRoute.params.subscribe(async param => {
      if (param['id']) {
        this.vehicle = await this.vehicleService.findVehicle(param['id']);
        console.log(this.vehicle)
      }
    });
  }

  async presentAlertVenda() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Vender',
      inputs: [
        {
          name: 'valorVenda',
          type: 'number',
          placeholder: 'Digite o valor'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}