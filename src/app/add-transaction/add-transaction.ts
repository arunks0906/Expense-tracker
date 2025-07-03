import { Component } from '@angular/core';
import { Transaction, Transaction_Service } from '../transaction'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-transaction.html',
  styleUrl: './add-transaction.css'
})

export class AddTransaction {
  id: number = 0;
  description: string = '';
  amount: number = 0;

  constructor(public transactionService: Transaction_Service) {}

  addTransaction(): void {
    if (!this.description) return;

    const newTransaction: Transaction = {
      id: this.id,
      description: this.description,
      amount: this.amount
    };

    this.transactionService.addTransaction(newTransaction);
    this.description = '';
    this.amount = 0;
    this.id = 0;
  }
}
