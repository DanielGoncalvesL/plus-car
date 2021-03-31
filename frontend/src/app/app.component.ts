import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Inicio', url: '/dashboard', icon: 'home' },
    { title: 'Minhas Despesas', url: '/despesas', icon: 'cash' },
    { title: 'Meus Carros', url: '/vehicles', icon: 'car' },
    { title: 'Log Out', url: '/login', icon: 'exit' },
  ];
  constructor() {}

  ngOnInit(){

  }
}
