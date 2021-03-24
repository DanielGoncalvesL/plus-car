import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
    // private operadorService: OperadorService,
    // private loadingService: LoadingService
  ) {}

  ngOnInit() {}

  async onSubmit() {

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

}
