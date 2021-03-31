import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { LoginService } from './services/login.service';
import { ILoginDTO } from './dtos/ILoginDTO';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });

  formEntrar = new FormGroup({
    usuarioInput: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    senhaInput: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private navController: NavController,
    private toastController: ToastController,
    private loginService: LoginService,
  ) {}

  ngOnInit() {
    localStorage.setItem('auth', JSON.stringify(null));
  }

  async onSubmit() {
    const userLogin = await this.loginService.auth({email: this.login.value.email, password: this.login.value.senha}).then();

    if (userLogin) {
      await this.exibirMensagem('Login realizado com sucesso!!');
      localStorage.setItem('auth', JSON.stringify(userLogin));
      await this.navController.navigateRoot('/dashboard');
    }else{
      await this.exibirMensagem('Usuario ou Senha Incorretos!!');
    }
  }

  teste(input, bgInput, bgInput2) {
    console.log(input.el.id);
    if (input.el.id === 'senhaInput') {
      bgInput.style.border = '2px solid #BDBDBD';
      bgInput2.style.border = '';
    } else if (input.el.id === 'usuarioInput') {
      bgInput.style.border = '2px solid #BDBDBD';
      bgInput2.style.border = '';
    }
  }

  showPassword(input) {
    if (input.el.type === 'password') {
      input.el.type = 'text';
    } else {
      input.el.type = 'password';
    }
    return true;
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1500,
    });
    toast.present();
  }

}
