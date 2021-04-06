import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { DespesaService } from '../services/despesa.service';
import { IExpenseDTO } from '../dtos/IExpenseDTO';
import { ActivatedRoute } from '@angular/router';
import { LoadingServiceService } from '../../../services/loading-service.service';


import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-new-expense-vehicle',
  templateUrl: './new-expense-vehicle.page.html',
  styleUrls: ['./new-expense-vehicle.page.scss'],
})
export class NewExpenseVehiclePage implements OnInit {

  vehicle_id: any;

  constructor(
    protected navController: NavController,
    protected toastController: ToastController,
    private expenseService: DespesaService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingServiceService

  ) {}

  expenseVehicleForm = new FormGroup({
    value: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

  async ionViewWillEnter() {
    this.activatedRoute.params.subscribe(async param => {
      if (param['id']) {
        this.vehicle_id = param['id'];
      }
    });
  }

  async submit() {
    this.loadingService.present();
    const response = await this.expenseService.createExpenseVehicle<IExpenseDTO>({
    value: this.expenseVehicleForm.get('value').value,
    description: this.expenseVehicleForm.get('description').value,
    vehicle_id: this.vehicle_id,
  });

  this.loadingService.dismiss();

    if (response) {
      await this.exibirMensagem('Despesa do veiculo cadastrado com sucesso!');
      await this.navController.navigateRoot('modalcar/' + this.vehicle_id);
    } else {
      await this.exibirMensagem('Erro ao cadastrar despesa do veiculo!');
    }
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
    });
    toast.present();
  }
}
