import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Balance } from './balance/balance';
import { AddTransaction } from './add-transaction/add-transaction';
import { List } from './list/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, Balance, AddTransaction, List],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'Expense Tracker';
}

