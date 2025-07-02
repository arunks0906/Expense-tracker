import { Component } from '@angular/core';
import { Transaction, Transaction_Service } from '../transaction'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
   constructor(public transactionService: Transaction_Service) {}

  deleteTransaction(id: number): void {
    this.transactionService.deleteTransaction(id);
  }

  get transactions(): Transaction[] {
    return this.transactionService.getTransactions();
  }
}