import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  
  singupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  });



  constructor(
    protected navController: NavController,
    protected toastController: ToastController,
    
  ) {}

  ngOnInit() {
  }

  async submit() {
  
  }

  clean(){
   this.singupForm.get('email').setValue('');
   this.singupForm.get('senha').setValue('');
  }
}

