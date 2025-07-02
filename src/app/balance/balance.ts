import { Component, OnInit } from '@angular/core';
import { Transaction, Transaction_Service } from '../transaction'
@Component({
  selector: 'app-balance',
  templateUrl: './balance.html',
  styleUrl: './balance.css'
})
export class Balance implements OnInit {
  income: number = 0;
  expense: number = 0;
  balance: number = 0;

  constructor(public transactionService: Transaction_Service) {}

  ngOnInit(): void {
    this.calculateTotals();
  }

  calculateTotals(): void {
    const transactions: Transaction[] = this.transactionService.getTransactions();

    this.income = transactions
      .filter(t => t.amount > 0)
      .reduce((acc, t) => acc + t.amount, 0);

    this.expense = transactions
      .filter(t => t.amount < 0)
      .reduce((acc, t) => acc + t.amount, 0);

    this.balance = this.income + this.expense; // expense is negative
  }
}