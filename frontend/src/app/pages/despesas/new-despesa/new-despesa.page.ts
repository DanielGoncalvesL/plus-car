import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import {DespesaService} from '../services/despesa.service';
import { IExpenseDTO } from '../dtos/IExpenseDTO';

@Component({
  selector: 'app-new-despesa',
  templateUrl: './new-despesa.page.html',
  styleUrls: ['./new-despesa.page.scss'],
})
export class NewDespesaPage implements OnInit {

  isEnable: any;
  brandDisabled: true;


  despesaForm = new FormGroup({
    value: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });


  constructor(
    protected navController: NavController,
    protected toastController: ToastController,
    private expenseService: DespesaService,
  ) {}

  async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

  async submit() {
    const response = await this.expenseService.createDespesa < IExpenseDTO > ({
      value: this.despesaForm.get('value').value,
      description: this.despesaForm.get('description').value,
    });

    if (response) {
      this.exibirMensagem('Despesa cadastrado com sucesso!');
      await this.navController.navigateRoot('/despesas');
    } else {
      this.exibirMensagem('Erro ao cadastrar despesa!');
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
