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
import { DespesaService } from '../despesas/services/despesa.service';
import { LoadingServiceService } from '../../services/loading-service.service';
import { NavController, ToastController } from '@ionic/angular';
import { NewSaleVehicleService } from './services/new-sale-vehicle.service';

@Component({
  selector: 'app-modalcar',
  templateUrl: './modalcar.page.html',
  styleUrls: ['./modalcar.page.scss'],
})
export class ModalcarPage implements OnInit {

  vehicle: any;
  expensesVehicle: any;

  constructor(
    private modalCrtl: ModalController,
    public alertController: AlertController,
    private vehicleService: NewVehicleService,
    private activatedRoute: ActivatedRoute,
    private despesaService: DespesaService,
    private loadingService: LoadingServiceService,
    private newSaleVehicleService: NewSaleVehicleService,
    protected navController: NavController,
    protected toastController: ToastController,
    ) {

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
    this.loadingService.present();
    this.activatedRoute.params.subscribe(async param => {
      if (param['id']) {
        this.vehicle = await this.vehicleService.findVehicle(param['id']);
        this.expensesVehicle = await this.despesaService.findExpensesVehiclesByVehicle(param['id']);
        console.log(this.vehicle)
        console.log(this.expensesVehicle)
      }
    });
    this.loadingService.dismiss();
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
          handler: async (data) =>  {
            if(data.valorVenda){
              const saleVehicle = await this.newSaleVehicleService.createDespesa({
                saleValue: data.valorVenda,
                vehicle_id: this.vehicle?.id
              });

              if(saleVehicle){
                await this.exibirMensagem('Veiculo vendido com sucesso');
                await this.navController.navigateRoot('dashboard');
              }
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
    });
    toast.present();
  }
}
