import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  NavController,
  ToastController
} from '@ionic/angular';

import {
  IBrand
} from './models/IBrand';
import {
  IModel
} from './models/IModel';
import {
  IVehicle
} from './models/IVehicle';
import {
  IYear
} from './models/IYear';

import {
  LoadingServiceService
} from '../../../services/loading-service.service';

import {
  ApiFipeService
} from '../services/api-fipe-service.service';

import {
  ICreateVehicleDTO
} from './dtos/ICreateVehicleDTO';

import {
  NewVehicleService
} from '../services/new-vehicle-service.service';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.page.html',
  styleUrls: ['./new-vehicle.page.scss'],
})
export class NewVehiclePage implements OnInit {

  brands: Array < IBrand > ;
  models: IModel[];
  years: IYear[];
  vehicle: IVehicle;
  tipo: string;
  isEnable: any;
  brandDisabled: true;
  value: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: string;

  contaForm = new FormGroup({
    type: new FormControl('', Validators.required),
    brand: new FormControl({
      value: ''
    }, Validators.required),
    model: new FormControl({
      value: ''
    }, Validators.required),
    year: new FormControl({
      value: ''
    }, Validators.required),
    value: new FormControl({
      value: '',
      disabled: true
    }, Validators.required),
  });


  constructor(
    private apiFipe: ApiFipeService,
    private loadingService: LoadingServiceService,
    private newVehicleService: NewVehicleService,
    protected navController: NavController,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

  async findBrands(vehicleType: string) {
    this.clean("brand");
    this.apiFipe.findBrands(vehicleType).subscribe(data => {
      this.loadingService.present();
      this.brands = data;
      this.loadingService.dismiss();
    });
  }

  async findModels(vehicleBrand: number) {
    this.clean("model");
    this.apiFipe.findModels(vehicleBrand).subscribe(data => {
      this.loadingService.present();
      this.models = data.modelos;
      this.loadingService.dismiss();
    });
  }

  async findYear(model: number) {
    this.clean("year");
    this.apiFipe.findYear(model).subscribe(data => {
      this.loadingService.present();
      this.years = data;
      this.loadingService.dismiss()
    });
  }

  async findVehicles(year: string) {
    this.apiFipe.findVehicles(year).subscribe(data => {
      this.loadingService.present();
      this.vehicle = data;
      this.loadingService.dismiss()
    });
  }

  async submit() {
    const response = await this.newVehicleService.createVehicle < ICreateVehicleDTO > ({
      brand: this.vehicle.Marca,
      fipeCode: this.vehicle.CodigoFipe,
      fuel: this.vehicle.Combustivel,
      modelYear: this.vehicle.AnoModelo.toString(),
      name: this.vehicle.Modelo,
      priceFipe: this.vehicle.Valor
    });

    if (response) {
      this.exibirMensagem('Veiculo cadastrado com sucesso!');
      await this.navController.navigateRoot('/vehicles');
    } else {
      this.exibirMensagem('Erro ao cadastrar veiculo!');
    }
  }

  clean(field ? : string) {
    switch (field) {
      case "brand":
        this.contaForm.get('brand').setValue('');
        this.contaForm.get('model').setValue('');
        this.contaForm.get('year').setValue('');
        this.contaForm.get('value').setValue('');
        this.brands = null;
        this.models = null;
        this.years = null;
        this.vehicle = null;
        break;
      case "model":
        this.contaForm.get('model').setValue('');
        this.contaForm.get('year').setValue('');
        this.contaForm.get('value').setValue('');
        this.models = null;
        this.years = null;
        this.vehicle = null;
        break;
      case "year":
        this.contaForm.get('year').setValue('');
        this.contaForm.get('value').setValue('');
        this.years = null;
        this.vehicle = null;
        break;
      default:
        this.contaForm.get('type').setValue('');
        this.contaForm.get('brand').setValue('');
        this.contaForm.get('model').setValue('');
        this.contaForm.get('year').setValue('');
        this.contaForm.get('value').setValue('');
        this.brands = null;
        this.models = null;
        this.years = null;
        this.vehicle = null;
        break;
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
