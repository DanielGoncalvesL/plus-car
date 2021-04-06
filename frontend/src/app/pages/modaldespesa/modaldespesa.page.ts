import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modaldespesa',
  templateUrl: './modaldespesa.page.html',
  styleUrls: ['./modaldespesa.page.scss'],
})
export class ModaldespesaPage implements OnInit {

  constructor(private modalCrtl: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }
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
}
