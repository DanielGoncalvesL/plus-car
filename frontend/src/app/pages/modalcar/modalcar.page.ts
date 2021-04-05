import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalcar',
  templateUrl: './modalcar.page.html',
  styleUrls: ['./modalcar.page.scss'],
})
export class ModalcarPage implements OnInit {

  constructor(private modalCrtl: ModalController) { 
    
  }

  ngOnInit() {
  }

  close(){
    this.modalCrtl.dismiss();
  }

}
