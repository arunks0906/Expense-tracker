import { Injectable } from '@angular/core';

export interface Transaction{
  id: number;
  description: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class Transaction_Service {
  
  transactions: Transaction[]= [];
  constructor() {

    const data= localStorage.getItem('transactions');
    if (data){
      this.transactions= JSON.parse(data);
    }
   }
    getTransactions(): Transaction[] {
    return this.transactions;
  }

  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
    this.saveToLocalStorage();
  }

  deleteTransaction(id: number): void {
    this.transactions = this.transactions.filter(t => t.id !== id);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }
}
