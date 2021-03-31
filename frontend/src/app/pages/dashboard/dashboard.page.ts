
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  currentMonth = 0;
  lastMonth = 0;
  private sizeCircle = 725;
  contas: any;
  // contasUsuario: Conta;
  // usuario: Usuario;
  meses: any = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  constructor(
    protected titleService: Title,
    protected navController: NavController,
    private alertController: AlertController,
    // private contaService: ContaServiceService,
  ) {
    this.titleService.setTitle('Minha Conta');
  }

  getPercentage() {
    const percentage = (this.currentMonth * 100) / this.lastMonth / 100;
    return percentage;
  }

  setStroke() {
    return this.sizeCircle + this.sizeCircle * this.getPercentage();
  }

  arredondar(value) {
    return Math.floor(value);
  }

  ngOnInit() {
    // this.contas = JSON.parse(localStorage.getItem('contaBD'));

    if (!this.contas) {
      // this.contas = [];
      // localStorage.setItem('contaBD', JSON.stringify(this.contas));
    }
    if (JSON.parse(localStorage.getItem('loginBD'))) {
      // this.usuario = JSON.parse(localStorage.getItem('loginBD'));
      // this.contas = JSON.parse(localStorage.getItem('contaBD'));
      // this.getContasByUsuario(this.usuario.id);
    } else {
      // this.navController.navigateBack('/login');
    }
  }

  async getContasByUsuario(id: number) {

  }

  obterData(data: string): string {
    let date = new Date(data);
    let dataFormatada =
      date.getDate() +
      ' ' +
      this.meses[date.getMonth()] +
      ' ' +
      date.getFullYear();
    return dataFormatada;
  }

  obterContas(contas: any) {
    let currentDate = new Date();
    for (var i = 0; i < contas.length; i++) {
      let data = new Date(contas[i].dataVencimento);
      if (data.getMonth() === currentDate.getMonth()) {
        this.currentMonth += contas[i].valor;
        console.log(this.currentMonth);
      } else if (currentDate.getMonth() - 1 < 0) {
        let dez = 11;
        if (data.getMonth() === dez) {
          this.lastMonth += contas[i].valor;
        }
      } else if (currentDate.getMonth() - 1 === data.getMonth()) {
        this.lastMonth += contas[i].valor;
      }
    }
  }

  totalContas() {
    // let total = 0;
    // for (var i = 0; i < this.contasUsuario.length; i++) {
    //   total += this.contasUsuario[i].valor;
    // }
    // return total;
  }

  excluir(id: string) {
    let conta: any[] = null;
    conta = this.contas.filter(temp => {
      return temp.id === id;
    });
    this.confirmarExclusao(conta[0]);
  }

  async confirmarExclusao(tipo: any) {
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      message: tipo.nomeTipo,
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            this.contas = JSON.parse(localStorage.getItem('contaBD'));
            this.contas = this.contas.filter(temp => {
              return temp.id != tipo.id;
            });
            localStorage.setItem('contaBD', JSON.stringify(this.contas));
            this.navController.navigateBack('/conta');
            window.location.href = window.location.href;
            //this.exibirMensagem();
          },
        },
      ],
    });
    await alert.present();
  }
}
