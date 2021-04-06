import { Component, OnInit } from '@angular/core';
import { DespesaService } from '../services/despesa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {

  expense: any;

  constructor(private expenseService: DespesaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.activatedRoute.params.subscribe(async param => {
      if (param['id']) {
        this.expense = await this.expenseService.findDespesa(param['id']);
        console.log(this.expense)
      }
    });
  }

}
