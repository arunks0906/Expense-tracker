import { Component, OnInit } from '@angular/core';
import { Transaction, Transaction_Service } from '../transaction'
@Component({
  selector: 'app-balance',
  standalone: true,
  templateUrl: './balance.html',
  styleUrl: './balance.css'
})
export class Balance {
  constructor(public transactionService: Transaction_Service) {}

  get income(): number {
    return this.transactionService.getTransactions()
      .filter(t => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0);
  }

  get expense(): number {
    return this.transactionService.getTransactions()
      .filter(t => t.amount < 0)
      .reduce((sum, t) => sum + t.amount, 0);
  }

  get total(): number {
    return this.income + this.expense;
  }
}