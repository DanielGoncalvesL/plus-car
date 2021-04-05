import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vehicle-expenses',
  templateUrl: './vehicle-expenses.page.html',
  styleUrls: ['./vehicle-expenses.page.scss'],
})
export class VehicleExpensesPage implements OnInit {

  constructor(private navController: NavController) { }

 async ngOnInit() {
    if (!JSON.parse(localStorage.getItem('auth'))) {
      await this.navController.navigateRoot('/login');
    }
  }

}
